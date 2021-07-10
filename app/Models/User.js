'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash');

class User extends Model {
  static get table() {
    return 'users';
  }
  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
    //TODO welcome mail afterCreate
  }

  static get hidden() {
    return ['verification_code', 'password', 'token', 'token_created_at', 'created_at', 'updated_at', 'image_id', 'invited_by', 'document', 'email', 'phone', 'facebook_id', 'google_id', 'email_verified_at', 'status'];
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany('App/Models/Token');
  }

  static get traits() {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission',
    ];
  }

  static async createUser(data) {
    const newUser = await this.create(data);

    return newUser;
  }

  static async getUsers(filter) {
    const allUsers = await this.query().where(filter).fetch();

    return allUsers;
  }

  static async deleteUser(id) {
    const user = await this.find(id);
    user.delete();

    return true;
  }

  employee() {
    return this.hasOne('App/Models/Employee');
  }

  customer() {
    return this.hasOne('App/Models/Customer');
  }

  partner() {
    return this.hasOne('App/Models/Partner');
  }

  bankAccounts() {
    return this.hasMany('App/Models/BankAccount');
  }

  image() {
    return this.belongsTo('App/Models/Image');
  }

  creditMovimentations() {
    return this.hasMany('App/Models/CreditMovimentation');
  }

  banishments() {
    return this.hasMany('App/Models/Banishment');
  }
}

module.exports = User;
