function findMultiples(x, y) {
    let arr = [];
    for (let i = 1; i <= y; i++) {
        if(x * i <= y){
            arr.push(x * i) ;
        }
  }
 console.log(arr);
};
findMultiples(2, 3);


