function solution(n) {
    const triad = n.toString(3).split('');

    let reverse = '';
    while (triad.length > 0) {
        reverse += triad.pop();
    }

    return Number(parseInt(reverse, 3));
}