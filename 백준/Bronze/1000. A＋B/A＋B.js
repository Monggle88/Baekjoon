const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

function solution(arr) {
    return arr.reduce((a, b) => Number(a) + Number(b));
}

console.log(solution(input));