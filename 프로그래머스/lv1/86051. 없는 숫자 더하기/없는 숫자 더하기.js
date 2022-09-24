function solution(numbers) {
    var answer = 45;
    let numSum = numbers.reduce((a, b) => a + b, 0);
    return answer-numSum;
}