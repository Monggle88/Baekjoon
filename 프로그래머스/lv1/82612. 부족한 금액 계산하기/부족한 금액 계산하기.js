function solution(price, money, count) {
    var answer = 0;
    let sumPrice = 0;
    for (let i = 1; i <= count; i++) {
        sumPrice += price * i
    }

    if (money - sumPrice > 0) {
        answer = 0;
    } else {
        answer = Math.abs(money - sumPrice);
    }

    return answer;
}