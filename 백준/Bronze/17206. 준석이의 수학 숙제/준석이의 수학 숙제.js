const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = input[1].split(' ');

let result = [0];
let sum = 0;

for (let i = 1; i < 80001; i++) {
    if (i % 3 === 0 || i % 7 === 0) sum += i;
    result.push(sum);
}

let answer = '';
for (let i = 0; i < testCase.length; i++) {
    answer += `${result[testCase[i]]}\n`;
}

console.log(answer);
