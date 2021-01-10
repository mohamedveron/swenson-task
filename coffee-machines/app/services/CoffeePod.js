'use strict'

const CoffeePodModel = use('App/Models/CoffeePod');

const Utils = use('App/services/Utils');
const utils = new Utils();

let _instance = null;

class CoffeePod{

    constructor(){

        if(!_instance){
            _instance = this;
        }

        return _instance;
    }

    async getCoffeePods(filters){

        let pods = [];
        let totalPods = await this.formulateCoffeePodObjects();
        let filter = utils.mapCoffeePodsFilters();

        // if no filters
        if(Object.keys(filters).length === 0){
            return totalPods;
        }

        if(filters['product_type'] && filters['water_line_compatible']){

            let type = filter.productTypes[filters['product_type']];

             for(let i = 0; i < totalPods.length; i++){
                
                 if(totalPods[i]._product_type == type && totalPods[i]._water_line_compatible === filters['water_line_compatible']){
                     machines.push(totalPods[i]);
                 }
             }
        }

        else if(!filters['product_type'] && filters['water_line_compatible']){

             for(let i = 0; i < totalPods.length; i++){

                 if(totalPods[i]._water_line_compatible === filters['water_line_compatible']){
                     machines.push(totalPods[i]);
                 }
             }
        }

        else if(filters['product_type'] && !filters['water_line_compatible']){

            let type = filter.productTypes[filters['product_type']];

             for(let i = 0; i < totalPods.length; i++){
                
                 if(totalPods[i]._product_type == type){
                     machines.push(totalPods[i]);
                 }
             }
       }

        return machines;
    }

   async formulateCoffeePodObjects(){

        let list = await utils.getCoffeePodsFromTheList();
        let pods = [];
        
        for(let i = 0; i < list.length; i++){

            // get coffe pod object elements
            var elements = list[i].split(",");

            // get code and product type
            var subElements = elements[0].split("–");
            var compatible = false;

            var pod = new CoffeePodModel(subElements[0], subElements[1], elements[2], elements[1]);
            
            pods.push(pod);
        }

        return pods;
    }
}

module.exports = CoffeePod;