'use strict'

class CoffeeMachine{

    constructor(code, product_type, water_line_compatible){

        this._code = code;
        this._product_type = product_type;
        this._water_line_compatible = water_line_compatible;
    }

}

module.exports = CoffeeMachine;