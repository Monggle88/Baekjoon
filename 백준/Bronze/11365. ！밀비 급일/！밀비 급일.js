const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

input.forEach((txt) => {
    if (txt !== 'END') {
        let arr = txt.split('');
        while (arr.length > 0) {
            result += arr.pop();
        }
        result += '\n';
    }
});

console.log(result);
