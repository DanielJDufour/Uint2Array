'use strict';

let chunk = require("chunk");

let expect = require('chai').expect;

let nbit = require("./src/index");

function get_data_view_from_values(values) {

    console.log("values:", values);

    let parsed = values.map(n => {
        let binary_string = n.toString(2);
        let length_of_binary_string = binary_string.length;
        if (length_of_binary_string === 1) {
            return "0" + binary_string;
        } else if (length_of_binary_string === 2) {
            return binary_string;
        }
    });
    console.log("parsed:", parsed);

    //chunked = [ [ '0', '1', '10', '11' ], [ '11', '10', '1', '0' ] ]
    let chunked = chunk(parsed, 4)
    console.log("chunked:", chunked);

    let bytes_as_strings = chunked.map(array => array.join(""));
    console.log("bytes_as_strings:", bytes_as_strings);

    let integers = bytes_as_strings.map(str => parseInt(str, 2));
    console.log("integers:", integers);

    let number_of_integers = integers.length;

    let buffer = new ArrayBuffer(number_of_integers);
    console.log("buffer:", buffer);

    let dataView = new DataView(buffer);
    console.log("dataView:", dataView);

    integers.forEach( (integer, index) => dataView.setInt8(index, integer) );

    return dataView;

}

function test_conversion(original_values) {
    let number_of_original_values = original_values.length;
    let dataView = get_data_view_from_values(original_values);
    let processed_values = [];
    for (let i = 0; i < number_of_original_values; i++) {
        processed_values.push(nbit.getUint2.call(dataView, i * 0.25));
    }
    expect(original_values.toString()).to.equal(processed_values.toString());
}


[
    [0,1,2,3,3,2,1,0],
    [0,1,2,3,3,2,1,0,1,1,1,1,3,2,1,2]
]
.forEach(test_conversion);
