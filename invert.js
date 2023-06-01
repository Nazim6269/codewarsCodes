function invert(array) {
    let lengths = array.length;
    for (let i = 0; i < lengths; i++) {
        array[i] = array[i] * (-1);
    };
    return array;
 }
 console.log(invert([1,-2,-3]));