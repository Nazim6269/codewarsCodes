// var Str = "Hello World!!"
// var newStr = Str.replace(/l{2}/gi,'')

// console.log(newStr);
// console.log(Str);

//=====using split method=====//

// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray);
// const myArray1 = text.split(" ", 3);
// console.log(myArray1);
function removeExclamationMarks(s) {
    var words = s.split("!");
    console.log(words);
    return words.join("");
}
console.log(removeExclamationMarks('hello world!!'));