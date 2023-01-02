const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = '';

for (let i = 1; i <= input; i++) {
    result += ' '.repeat(input - i);
    result += '*'.repeat(2 * i - 1);
    result += '\n';
}

console.log(result);
