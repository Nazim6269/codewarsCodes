let x = 'Nazim';
let lengths = x.length;
let array = [];
for (let i = 0; i < lengths; i++) {
    let code = x.charCodeAt(i);
    console.log(code);
    if (code >= 65 && code <=90) {array.push(code + 32)};
    if (code >=97 && code <=122) {array.push(code -32)} else{array.push(code)};
}
console.log(array);