function isUpperCase (str) {
    for (let i = 0; i < str.length; i++) {
        str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122;
        return false;
    }
    return true;
}
console.log(isUpperCase(`CCCCCCC`));