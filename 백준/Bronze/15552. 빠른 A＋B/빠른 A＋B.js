const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

for (let i = 1; i <= input[0]; i++) {
    const arr = input[i].split(' ');

    result += Number(arr[0]) + Number(arr[1]) + '\n';
}
console.log(result);