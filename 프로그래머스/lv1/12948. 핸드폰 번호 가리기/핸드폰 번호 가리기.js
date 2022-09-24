function solution(arr) {
    var answer = '*'.repeat(arr.length - 4);
    const publicNum = arr.substr(-4,4);
    return answer + publicNum;
}