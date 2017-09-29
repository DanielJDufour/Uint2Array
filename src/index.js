'use strict';

function getUint2(byteOffset, littleEndian) {
    let floored = Math.floor(byteOffset);
    let bitOffset = byteOffset % 8 / 0.25;
    let raw_string = this.getUint8(floored).toString(2);
    let padded_string = "";
    let number_of_zeros = 8 - raw_string.length;
    for (let i = 0; i < number_of_zeros; i++) {
        padded_string += "0";
    }
    padded_string += raw_string;
    let bits_as_string = padded_string.substring(bitOffset, bitOffset + 2);
    return parseInt(bits_as_string, 2);
}

module.exports = {
    getUint2: getUint2
}
