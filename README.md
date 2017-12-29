# nbit

[![Greenkeeper badge](https://badges.greenkeeper.io/DanielJDufour/nbit.svg)](https://greenkeeper.io/)

Work with 2-bit data

# Current Methods
getUint2

# Coming Soon
Uint2Array

# Usage
```
    import { getUint2 } from 'nbit';

    // get second 2bit value
    let value = getUint2.call(dataView, 0.25);
```

# getUint2
getUint2 works just like getUint8.  You still pass in how many bytes the value that you are looking for is offset.  This leads us to passing in a byteOffset parameter that is a multiple of 0.25.  For example, 7.25 bytes would refer to 58 bits offset (7.25 * 8 bits), which for a 2-bit array is 29 values offset.
