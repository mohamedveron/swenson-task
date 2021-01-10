'use strict'

class CoffeePod{

    constructor(code, product_type, coffee_flavor, pack_size){

        this._code = code;
        this._product_type = product_type;
        this._coffee_flavor = coffee_flavor;
        this._pack_size = pack_size;
    }

}

module.exports = CoffeePod;