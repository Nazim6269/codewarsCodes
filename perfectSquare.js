var isSquare = function(n){
    const value = Math.sqrt(n);
    if (n === 0){
        return true;
    }else if (value - Math.floor(value) === 0){
        return true;
    }else{
        return false;
    }
  }

  console.log(isSquare(25));

//   function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }