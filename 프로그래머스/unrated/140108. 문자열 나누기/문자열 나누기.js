function solution(s) {
    let answer = 0;
    const arr = s.split('');

    let firstWord = '';
    let xCnt = 0;
    let otherCnt = 0;

    while (arr.length > 0) {
        if (firstWord.length === 0) {
            firstWord = arr.shift();
            xCnt++;
        }

        if (firstWord === arr.shift()) {
            xCnt++;
        } else {
            otherCnt++;
        }

        if (xCnt === otherCnt) {
            answer++;
            xCnt = 0;
            otherCnt = 0;
            firstWord = '';
        }
    }

    if (firstWord.length) {
        answer++;
    }

    return answer;
}