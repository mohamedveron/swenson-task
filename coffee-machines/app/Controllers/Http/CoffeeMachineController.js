'use strict'
const CoffeeMachine = use('App/services/CoffeeMachine');
const coffeeMachineService = new CoffeeMachine();

class CoffeeMachineController{



        /**
   * Show a list of all coffee Machines with filters.
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
      let coffeeMachines = await coffeeMachineService.getCoffeeMachines(requestBody);
      responseData = coffeeMachines;

    } catch (error) {
      console.log("get coffee Machines Throws error.................. ", error);
      responseData = {"error" : null};
    }
    
    response.status(200).send(responseData); 
  }

}

module.exports = CoffeeMachineController