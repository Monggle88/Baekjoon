const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function Solution(arr) {
    let answer = '';

    for (let i = 1; i <= Number(arr[0]); i++) {
        const arrOX = arr[i].split('');
        let combo = 0;
        let score = 0;
        arrOX.forEach((e) => {
            if (e === 'O') {
                combo++;
                score += combo;
            } else {
                combo = 0;
            }
        });
        answer += `${score}\n`;
    }

    return answer;
}

console.log(Solution(input));
