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

        if(filters['product_type'] && filters['coffee_flavor'] && filters['pack_size']){

            let type = filter.productTypes[filters['product_type']];
            let flavor = filter.flavors[filters['coffee_flavor']]

             for(let i = 0; i < totalPods.length; i++){
                
                 if(totalPods[i]._product_type == type && totalPods[i]._coffee_flavor === flavor && totalPods[i]._pack_size === filters['pack_size']){
                    pods.push(totalPods[i]);
                 }
             }
        }

        else if(filters['product_type'] && filters['coffee_flavor'] && !filters['pack_size']){

            let type = filter.productTypes[filters['product_type']];
            let flavor = filter.flavors[filters['coffee_flavor']]

             for(let i = 0; i < totalPods.length; i++){
                
                 if(totalPods[i]._product_type == type && totalPods[i]._coffee_flavor === flavor){
                    pods.push(totalPods[i]);
                 }
             }
        }

        else if(filters['product_type'] && !filters['coffee_flavor'] && filters['pack_size']){

            let type = filter.productTypes[filters['product_type']];

             for(let i = 0; i < totalPods.length; i++){
                
                 if(totalPods[i]._product_type == type && totalPods[i]._pack_size === filters['pack_size']){
                    pods.push(totalPods[i]);
                 }
             }
        }

        else if(!filters['product_type'] && filters['coffee_flavor'] && filters['pack_size']){

            let flavor = filter.flavors[filters['coffee_flavor']]

             for(let i = 0; i < totalPods.length; i++){
                
                 if(totalPods[i]._coffee_flavor === flavor && totalPods[i]._pack_size === filters['pack_size']){
                    pods.push(totalPods[i]);
                 }
             }
        }

        else if(!filters['product_type'] && filters['coffee_flavor'] && !filters['pack_size']){

            let flavor = filter.flavors[filters['coffee_flavor']]

             for(let i = 0; i < totalPods.length; i++){

                 if(totalPods[i]._coffee_flavor === flavor){
                    pods.push(totalPods[i]);
                 }
             }
        }

        else if(filters['product_type'] && !filters['coffee_flavor'] && !filters['pack_size']){

            let type = filter.productTypes[filters['product_type']];

             for(let i = 0; i < totalPods.length; i++){
                
                 if(totalPods[i]._product_type == type){
                    pods.push(totalPods[i]);
                 }
             }
       }

       else if(!filters['product_type'] && !filters['coffee_flavor'] && filters['pack_size']){

         for(let i = 0; i < totalPods.length; i++){
            
             if(totalPods[i]._pack_size === filters['pack_size']){
                pods.push(totalPods[i]);
             }
         }
   }

        return pods;
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

            var pod = new CoffeePodModel(subElements[0], subElements[1], elements[2], elements[1].substring(1));
            
            pods.push(pod);
        }

        return pods;
    }
}

module.exports = CoffeePod;