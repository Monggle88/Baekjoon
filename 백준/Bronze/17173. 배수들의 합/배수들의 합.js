const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const x = Number(input[0].split(' ')[0]);
const arr = input[1].split(' ').map((x) => Number(x));

let result = 0;

for (let i = 1; i <= x; i++) {
    if (isMultiple(i, arr) === true) {
        result += i;
    }
}

function isMultiple(num, arr) {
    let result = false;
    arr.forEach((e) => {
        if (num % e === 0) {
            result = true;
        }
    });
    return result;
}

console.log(result);
