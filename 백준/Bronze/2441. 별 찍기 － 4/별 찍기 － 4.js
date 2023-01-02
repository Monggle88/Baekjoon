const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = '';

for (let i = input; i > 0; i--) {
    result += ' '.repeat(input - i);
    result += '*'.repeat(i);
    result += '\n';
}

console.log(result);
