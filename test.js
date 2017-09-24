'use strict';

let expect = require('chai').expect;

const nbit = require("./src/index");
const Uint2Array = nbit.Uint2Array;
const Uint4Array = nbit.Uint4Array;

var new_array = new Uint2Array(10);

console.log("new_array:", new_array);
