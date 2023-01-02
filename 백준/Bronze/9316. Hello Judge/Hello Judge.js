const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = '';

for (let i = 1; i <= input; i++) {
    result += `Hello World, Judge ${i}!\n`;
}

console.log(result);
