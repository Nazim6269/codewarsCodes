function isPalindrome (x){
    x = x.toUpperCase();
    lengths = x.length - 1;
    for (let i =0, j = lengths; i <= lengths; i++, j--){
        if (i > j) break;
        if (x[i] == x[j]) continue;
        else return false;
    }
    return true;
};
console.log(isPalindrome('Bbb'));
