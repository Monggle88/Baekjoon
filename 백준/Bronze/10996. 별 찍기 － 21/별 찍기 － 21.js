const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = '';

for (let i = 1; i <= input; i++) {
    result += '* '.repeat(Math.ceil(input / 2)) + '\n';
    result += ' *'.repeat(Math.floor(input / 2)) + '\n';
}

console.log(result);
