const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

let result = '';

for (let i = 0; i < input.length; i++) {
    if (i !== 0 && i % 10 === 0) {
        result += '\n';
    }
    result += input[i];
}

console.log(result);
