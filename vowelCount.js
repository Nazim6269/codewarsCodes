



function getCount(str) {  
    const vowelsArr = str.match(/[aeiou]/gi);
    return vowelsArr?.length ? vowelsArr.length : 0; 
}
console.log(getCount('my pyx'));






// function vowelCount(str) {
//     let count = null;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'a'){
//             count = count + 1;
//         }if (str[i] === 'e'){
//             count = count + 1;
//         } if (str[i] === 'i'){
//             count = count + 1;
//         }if (str[i] === 'o'){
//             count = count + 1;
//         }if (str[i] === 'u'){
//             count = count + 1;
//         }
//     }
//     return count;
// }

// console.log(vowelCount('saeed'));
