'use strict';

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

function getUint2(byteOffset, littleEndian) {
    let floored = Math.floor(byteOffset);
    let bitOffset = byteOffset % 8 / 0.25;
    let raw_string = this.getUint8(floored).toString(2);
    let padded_string = "0".repeat(8 - raw_string.length) + raw_string;
    let bits_as_string = padded_string.substring(bitOffset, bitOffset + 2);
    return parseInt(bits_as_string, 2);
}

module.exports = {
    getUint2: getUint2,
    Uint2Array: Uint2Array
}
