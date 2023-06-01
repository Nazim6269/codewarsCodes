// function solution(str){
//     return  myArray = str.split('').reverse().join('');
// }
// console.log(solution('name'));

const solution = s => [...s].reverse().join('');
console.log(solution('12345'));