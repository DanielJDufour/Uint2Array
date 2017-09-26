'use strict';

function getUint2(byteOffset, littleEndian) {
    let floored = Math.floor(byteOffset);
    let bitOffset = byteOffset % 8 / 0.25;
    let raw_string = this.getUint8(floored).toString(2);
    let padded_string = "0".repeat(8 - raw_string.length) + raw_string;
    let bits_as_string = padded_string.substring(bitOffset, bitOffset + 2);
    return parseInt(bits_as_string, 2);
}

module.exports = {
    getUint2: getUint2
}
