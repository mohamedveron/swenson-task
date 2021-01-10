'use strict'
const CoffeePod = use('App/services/CoffeePod');
const coffeePodService = new CoffeePod();

class CoffeePodController{



        /**
   * Show a list of all coffee pods with filters.
   * POST sections
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {


    let requestBody = request.post();

    let responseData = {};

    try {
      let coffeePods = await coffeePodService.getCoffeePods(requestBody);
      responseData = coffeePods;

    } catch (error) {
      console.log("get coffee Machines Throws error.................. ", error);
      responseData = {"error" : null};
    }
    
    response.status(200).send(responseData); 
  }

}

module.exports = CoffeePodController