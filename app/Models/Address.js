'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

const Database = use('Database');

class Address extends Model {
  static get hidden() {
    return ['id',
      'created_at', 
      'updated_at'
    ];
  }

  static scopeNearBy (query, latitude, longitude, distance) {
    const haversine = `(6371 * acos(cos(radians(${latitude}))
      * cos(radians(lat))
      * cos(radians(lon)
      - radians(${longitude}))
      + sin(radians(${latitude}))
      * sin(radians(lat))))`
  
    return query
      .select('*', Database.raw(`${haversine} as distance`))
      .whereRaw(`${haversine} < ${distance}`)
  }

  partners() {
    return this.belongsToMany('App/Models/Partner').pivotTable(
      'partner_addresses'
    );
  }

  transportMethod() {
    return this.belongsTo('App/Models/TransportMethod');
}
}

module.exports = Address;
