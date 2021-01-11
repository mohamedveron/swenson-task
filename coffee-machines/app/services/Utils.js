'use strict'

let _instance = null;

class Utils{

    

    constructor(){

        if(!_instance){
            _instance = this;
        }

        return _instance;
    }

    GetCoffeeList(){

        var list = ["CM001 – small machine, base model"
                    , "CM002 – small machine, premium model"
                    , "CM003 – small machine, deluxe model, water line compatible"
                    , "CM101 – large machine, base model"
                    , "CM102 – large machine, premium model, water line compatible"
                    , "CM103 – large machine, deluxe model, water line compatible"
                    , "EM001 – espresso machine, base model"
                    , "EM002 – espresso machine, premium model"
                    , "EM003 – espresso machine, deluxe model, water line compatible"
                    , "CP001 – small coffee pod, 1 dozen, vanilla"
                    , "CP003 – small coffee pod, 3 dozen, vanilla"
                    , "CP011 – small coffee pod, 1 dozen, caramel"
                    , "CP013 – small coffee pod, 3 dozen, caramel"
                    , "CP021 – small coffee pod, 1 dozen, psl"
                    , "CP023 – small coffee pod, 3 dozen, psl"
                    , "CP031 – small coffee pod, 1 dozen, mocha"
                    , "CP033 – small coffee pod, 3 dozen, mocha"
                    , "CP041 – small coffee pod, 1 dozen, hazelnut"
                    , "CP043 – small coffee pod, 3 dozen, hazelnut"
                    , "CP101 – large coffee pod, 1 dozen, vanilla"
                    , "CP103 – large coffee pod, 3 dozen, vanilla"
                    , "CP111 – large coffee pod, 1 dozen, caramel"
                    , "CP113 – large coffee pod, 3 dozen, caramel"
                    , "CP121 – large coffee pod, 1 dozen, psl"
                    , "CP123 – large coffee pod, 3 dozen, psl"
                    , "CP131 – large coffee pod, 1 dozen, mocha"
                    , "CP133 – large coffee pod, 3 dozen, mocha"
                    , "CP141 – large coffee pod, 1 dozen, hazelnut"
                    , "CP143 – large coffee pod, 3 dozen, hazelnut"
                    , "EP003 – espresso pod, 3 dozen, vanilla"
                    , "EP005 – espresso pod, 5 dozen, vanilla"
                    , "EP007 – espresso pod, 7 dozen, vanilla"
                    , "EP013 – espresso pod, 3 dozen, caramel"
                    , "EP015 – espresso pod, 5 dozen, caramel"
                    , "EP017 – espresso pod, 7 dozen, caramel"];

        return list;
    }


    async getCoffeeMachinesFromTheList(){

        let list = this.GetCoffeeList();
        let coffeeMachines = [];

        for(let i = 0; i < list.length; i++){

            if(list[i].includes("machine")){
                coffeeMachines.push(list[i]);
            }
        }

        return coffeeMachines;
    }

    async getCoffeePodsFromTheList(){

        let list = this.GetCoffeeList();
        let coffeePods = [];

        for(let i = 0; i < list.length; i++){

            if(list[i].includes("pod")){
                coffeePods.push(list[i]);
            }
        }

        return coffeePods;
    }

    mapCoffeeMachinesFilters(){

        let productTypes = new Map();
        productTypes['COFFEE_MACHINE_LARGE'] = ' large machine';
        productTypes['COFFEE_MACHINE_SMALL'] = ' small machine'; 
        productTypes['ESPRESSO_MACHINE'] = ' espresso machine'; 
        
        return {

            productTypes: productTypes
        }
    }

    mapCoffeePodsFilters(){

        let productTypes = new Map();
        productTypes['COFFEE_POD_LARGE'] = ' large coffee pod';
        productTypes['COFFEE_POD_SMALL'] = ' small coffee pod'; 
        productTypes['ESPRESSO_POD'] = ' espresso pod'; 

        let flavors = new Map();
        flavors['COFFEE_FLAVOR_VANILLA'] = ' vanilla';
        flavors['COFFEE_FLAVOR_CARAMEL'] = ' caramel';
        flavors['COFFEE_FLAVOR_PSL'] = ' psl';
        flavors['COFFEE_FLAVOR_MOCHA'] = ' mocha';
        flavors['COFFEE_FLAVOR_HAZELNUT'] = ' hazelnut';

        
        return {

            productTypes: productTypes,
            flavors: flavors
        }
    }
}

module.exports = Utils;