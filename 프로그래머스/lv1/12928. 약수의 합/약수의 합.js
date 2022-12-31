function solution(num) {
    const divisors = [];
    
    if (num === 0) {
        return 0
    }
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            divisors.push(i);
            if(num / i != i) divisors.push(num / i);
        }
    }
    
    return divisors.reduce((a,b) => (a+b));
}