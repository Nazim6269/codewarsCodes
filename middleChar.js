function getMiddle(s)
{
    const char = s.length;
    if (char === 1 || char ===2){
        return s;
    }else if (char % 2 == 0){
        return `${s[char/2 - 1]}${s[char/2]}`;
    }else{
        return s[Math.floor(char/2)];
    }
}

console.log(getMiddle('abc'));