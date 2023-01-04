const fs = require('fs');
let input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('')
    .map((x) => Number(x));

console.log(input.sort((a, b) => b - a).join(''));
