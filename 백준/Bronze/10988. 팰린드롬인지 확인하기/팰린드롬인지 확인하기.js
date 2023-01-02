const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const isPalindrome = input.split('').reverse().join('');

console.log(Number(input === isPalindrome));
