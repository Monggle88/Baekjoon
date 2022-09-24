function solution(arr, arr2) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = [];
        for (let j = 0; j < arr[i].length; j++) {
            sum.push(arr[i][j] + arr2[i][j]);
        }
        answer.push(sum);
    }
    return answer;
}