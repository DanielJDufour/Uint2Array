'use strict';

function getUint2(byteOffset, littleEndian) {
    var floored = Math.floor(byteOffset);
    var bitOffset = byteOffset % 8 / 0.25;
    var raw_string = this.getUint8(floored).toString(2);
    var padded_string = "";
    var number_of_zeros = 8 - raw_string.length;
    for (var i = 0; i < number_of_zeros; i++) {
        padded_string += "0";
    }
    padded_string += raw_string;
    var bits_as_string = padded_string.substring(bitOffset, bitOffset + 2);
    return parseInt(bits_as_string, 2);
}

module.exports = {
    getUint2: getUint2
};
