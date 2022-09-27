function solution(n) {
    let answer = [];
    n -= 1; // 나누어지는 수를 구하기 위함

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer.push(i);
        }
    }

    if (answer.length > 1) {
        return answer[1];
    } else {
        return answer[0];
    }
}