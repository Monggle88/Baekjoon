function solution(arr) {
    const sumNums = arr.reduce(
        (a, b) => a + b, 0
    );
    return sumNums / arr.length;
}