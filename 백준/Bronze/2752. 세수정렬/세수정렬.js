const fs = require('fs');
const input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map((x) => Number(x));

console.log(input.sort((a, b) => a - b).join(' '));
