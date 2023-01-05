const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

function factorial(n) {
    if (n === 0) return 0;
    return n != 1 ? BigInt(BigInt(n) * BigInt(factorial(n - 1))) : 1;
}

let arr = String(factorial(input))
    .split('')
    .map((x) => Number(x));

let cnt = 0;

if (arr.length > 1) {
    while (arr.pop() === 0) {
        cnt++;
    }
}

console.log(cnt);