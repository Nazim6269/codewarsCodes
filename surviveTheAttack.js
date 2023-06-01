function hasSurvived(attackers, defenders){
    let lengths = attackers.length;
    let sur = 0;
    for (let i = 0; i < lengths ; i++){
        let result = attackers[i] - defenders[i];
        if (result < 0) return sur += result * (-1);
        else if (result > 0) return sur += result;
    }
}
console.log(hasSurvived([1,2,3] , [2,3,6]));  