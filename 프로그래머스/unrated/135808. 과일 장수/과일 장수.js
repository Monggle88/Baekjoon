function solution(k, m, score) {
    let answer = 0;

    score.sort((a, b) => b - a);
    let index = m - 1;

    for (let i = 0; i < Math.floor(score.length / m); i++) {
        answer += score[index] * m;

        index += m;
    }

    return answer;
}
