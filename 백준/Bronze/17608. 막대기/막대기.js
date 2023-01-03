const fs = require('fs');
let input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((x) => Number(x));

input = input.slice(1);

let max = 0;
let cnt = 0;

while (input.length) {
    let number = input.pop();
    if (max < number) {
        max = number;
        cnt++;
    }
}

console.log(cnt);
