function solution(n) {

    let x = Math.sqrt(n);

    if (x > 0 && Number.isInteger(x)) {
        return (x + 1) ** 2;
    }
    
    return -1;
}