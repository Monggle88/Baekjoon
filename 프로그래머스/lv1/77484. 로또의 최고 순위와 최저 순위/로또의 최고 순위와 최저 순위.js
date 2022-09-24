function solution(lottos, win_nums) {
    let answer = [];

    // 0을 제외한 당첨되지 않은 번호 지우기
    // - lottos의 번호가 win_nums에 들어있지 않다면 버린다.(0은 버리지 않음)
    for (let i = 0; i < lottos.length; i++) {
        if (!win_nums.includes(lottos[i]) && lottos[i] !== 0) {
            lottos.splice(i, 1);
            i--;
        }
    }

    // 최고 순위는 7 - 배열의 길이.
    if (lottos.length === 0) {
        answer.push(6);
    } else {
        answer.push(7 - lottos.length);
    }

    // 최저 순위는 7 - (배열의 길이에서 0의 갯수를 뺀 값).
    if (Math.max(...lottos) < 1) {
        answer.push(6);
    } else {
        let zeroCount = 0;
        lottos.map(num => {
            if (num === 0) zeroCount++;
        });

        answer.push(7 - (lottos.length - zeroCount));
    }

    return answer;
}