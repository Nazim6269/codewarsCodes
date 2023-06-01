function highAndLow (string){
    const value = string.replace(/[' ']/gi, '');
   const char = [...value]
    return `${parseInt(Math.max(...char))} ${parseInt(Math.min(...char))}`;
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));