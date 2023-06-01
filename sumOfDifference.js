function sumOfDifferences(arr) {
    let len = arr.sort(function (a, b) { return b - a;}).length;
    let sum = 0;
    for(let i = 0; i < len; i++) {
        sum += arr[i + 1] - arr[i];
    }
    return sum;
} 
console.log (sumOfDifferences([2, 1, 10]));