const fs = require('fs');
let input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((x) => Number(x))
    .slice(1);

const result = input.sort((a, b) => b - a);
let answer = '';

result.forEach((num) => {
    answer += `${num}\n`;
});

console.log(answer);
