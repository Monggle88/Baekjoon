function solution (n) {
    
    let answer = 0;
    
    n = String(n).split('');


    for (let i = 0; i < n.length; i++) {
        let num = Number(n[i]);
        answer += num;
    }

    return answer;
}