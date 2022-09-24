function solution(n) {
    
    var answer = "";

    let arr = String(n).split("").sort().reverse();

    for (let i = 0; i < arr.length; i++) {
        answer = Number(arr.join(''));
    }

    return answer;
}