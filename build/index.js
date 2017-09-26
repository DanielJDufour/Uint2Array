'use strict';

/*
class Uint2Array extends Uint8Array {

    constructor(input) {

        let type_of_input = typeof input;

        if (type_of_input === "number" || input instanceof Number) {
            let size = input;
            console.log("constructing with size", size);
            super(size);
        } else if (input instanceof ArrayBuffer) {
            //console.log("constructing Uint2Array with ArrayBuffer of ", input);
        } else {
           super(input);
           console.log("constructed");
        }
    }
} 
*/

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Uint2Array = function Uint2Array() {
    _classCallCheck(this, Uint2Array);
};

function getUint2(byteOffset, littleEndian) {
    var floored = Math.floor(byteOffset);
    var bitOffset = byteOffset % 8 / 0.25;
    var raw_string = this.getUint8(floored).toString(2);
    var padded_string = "0".repeat(8 - raw_string.length) + raw_string;
    var bits_as_string = padded_string.substring(bitOffset, bitOffset + 2);
    return parseInt(bits_as_string, 2);
}

module.exports = {
    getUint2: getUint2,
    Uint2Array: Uint2Array
};
