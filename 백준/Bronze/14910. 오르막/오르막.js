const fs = require('fs');
const input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map((x) => Number(x));

function solution(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return 'Bad';
    }

    return 'Good';
}

console.log(solution(input));
