'use strict'

const Policy = use('App/Models/Policy');

class PolicyController {
   async index ({ request, response }){

     const policies = await Policy
    .query()
    .fetch()
    
    return {policies}

    }
        
   
}







module.exports = PolicyController
