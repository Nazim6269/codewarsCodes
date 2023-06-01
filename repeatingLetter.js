function isIsogram(str){
    for (let i = 0, j = str.length; i < str.length, j<i; i++, j--) {
        if (str[i] === str[j]){
            return false;
        }else{
            return true;
        }
  }
}
  console.log(isIsogram('Dermatoglyphics'));
  
