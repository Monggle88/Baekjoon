function solution(num) {
    var answer = '';
    if (num !== 0) {
        if (0 === num % 2) {
            answer = "Even"
        } else {
            answer = "Odd"
        }
    } else {
        answer = "Even"
    }
    return answer;
}