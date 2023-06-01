function getSum( a,b ){
    if ( a == b) return a;
    if ( a > b){
        let sum = 0;
    for (let i = a; i <= b; i++){
        sum += i;
    }
    return sum;
    }else{
        let sum = 0;
    for (let i = b; i <= a; i++){
        sum += i;
    }
    return sum;
    }
    
}
console.log(getSum(2,3));