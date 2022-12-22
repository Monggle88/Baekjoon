function solution(food) {
    let answer = '';

    let = challengeFood = [];

    for (let i = 1; i < food.length; i++) {
        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            challengeFood.push(i);
        }
    }
    answer = challengeFood.join('');
    answer += '0';
    challengeFood.reverse();
    answer += challengeFood.join('');

    return answer;
}