const fs = require('fs');
const input = fs.readFileSync('stdin.txt').toString().trim().split('\n');

let result = '';
const init = Array(3).fill(0);
let [yonsei, korea, round] = init;

for (let i = 1; i <= input[0] * 9; i++) {
    const score = input[i].split(' ').map((x) => Number(x));
    yonsei += score[0];
    korea += score[1];
    round += 1;

    if (round === 9) {
        result += calcul(yonsei, korea) + '\n';
        [yonsei, korea, round] = init;
    }
}

function calcul(y, k) {
    if (y > k) return 'Yonsei';
    if (y < k) return 'Korea';
    return 'Draw';
}

console.log(result);
