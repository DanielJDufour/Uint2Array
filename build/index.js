'use strict';

class Uint2Array extends Uint8Array {

    constructor(input) {

        let type_of_input = typeof input;

        if (type_of_input === "number" || input instanceof Number) {
            //let size = Math.ceil(input / 4);
            let size = input;
            console.log("constructing with size", size);
            super(size);

            //rthis.buffer = new ArrayBuffer(size * 2); //we multiply by two because it's a 2-bit array
            // new Uint2Array(10) should return something like
            // Uint8Array(10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        } else if (input instanceof ArrayBuffer) {
            //console.log("constructing Uint2Array with ArrayBuffer of ", input);
            
        } else {
           super(input);
           console.log("constructed");
        }
    }
} 

function getUint2(byteOffset, littleEndian) {
    //console.log("starting getUint2 with", byteOffset);
    let floored = Math.floor(byteOffset);
    //console.log("floored:", floored);
    let bitOffset = byteOffset % 8 / 0.25;
    let raw_string = this.getUint8(floored).toString(2);
    let padded_string = "0".repeat(8 - raw_string.length) + raw_string;
    let bits_as_string = padded_string.substring(bitOffset, bitOffset + 2);
    return parseInt(bits_as_string, 2);
}

/*
class DataView2 extends DataView { }

DataView2.prototype.getUint2 = function(byteOffset) {
    //return this.buffer.slice(byteOffset, bytOffset + 1);
    let byteOffsetFloored = Math.floor(byteOffset);
    let bitOffset = byteOffset % 8 * 8;
    return parseInt(this.getUint8(byteOffsetFloored).toString().padStart(8).substring(bitOffset, bitOffset + 2), 2);
}


DataView2.prototype.getUint2 = function(byteOffset) {
    //return this.buffer.slice(byteOffset, bytOffset + 1);
    let byteOffsetFloored = Math.floor(byteOffset);
    let bitOffset = byteOffset % 8 * 8;
    return parseInt(this.getUint8(byteOffsetFloored).toString().padStart(8).substring(bitOffset, bitOffset + 4), 2);
}
*/

module.exports = {
    getUint2: getUint2,
    Uint2Array: Uint2Array
}
