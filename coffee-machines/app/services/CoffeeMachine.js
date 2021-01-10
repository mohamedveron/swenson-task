'use strict'

const CoffeeMachineModel = use('App/Models/CoffeeMachine');

const Utils = use('App/services/Utils');
const utils = new Utils();

let _instance = null;

class CoffeeMachine{

    constructor(){

        if(!_instance){
            _instance = this;
        }

        return _instance;
    }


    async getCoffeeMachines(filters){

        let machines = [];
        let totalMachines = await this.formulateCoffeeMachineObjects();
        let filter = utils.mapCoffeeMachinesFilters();

        // if no filters
        if(Object.keys(filters).length === 0){
            return totalMachines;
        }

        if(filters['product_type'] && filters['water_line_compatible']){

            let type = filter.productTypes[filters['product_type']];

             for(let i = 0; i < totalMachines.length; i++){
                
                 if(totalMachines[i]._product_type == type && totalMachines[i]._water_line_compatible === filters['water_line_compatible']){
                     machines.push(totalMachines[i]);
                 }
             }
        }

        else if(!filters['product_type'] && filters['water_line_compatible']){

             for(let i = 0; i < totalMachines.length; i++){

                 if(totalMachines[i]._water_line_compatible === filters['water_line_compatible']){
                     machines.push(totalMachines[i]);
                 }
             }
        }

        else if(filters['product_type'] && !filters['water_line_compatible']){

            let type = filter.productTypes[filters['product_type']];

             for(let i = 0; i < totalMachines.length; i++){
                
                 if(totalMachines[i]._product_type == type){
                     machines.push(totalMachines[i]);
                 }
             }
       }

        return machines;
    }

   async formulateCoffeeMachineObjects(){

        let list = await utils.getCoffeeMachinesFromTheList();
        let machines = [];
        
        for(let i = 0; i < list.length; i++){

            // get coffe machine object elements
            var elements = list[i].split(",");

            // get code and product type
            var subElements = elements[0].split("–");
            var compatible = false;

            // detect if coffee machine is compatible or not
            if(elements.length > 2 && elements[2].includes("compatible")){

                compatible = true;
            }

            var machine = new CoffeeMachineModel(subElements[0], subElements[1], compatible);
            
            machines.push(machine);
        }

        return machines;
    }
}

module.exports = CoffeeMachine;