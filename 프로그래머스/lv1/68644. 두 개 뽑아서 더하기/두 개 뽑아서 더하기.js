function solution(numbers) {
    let answer = new Set();

    numbers.forEach((e) => {
        numbers.forEach((n) => {
            if (numbers.indexOf(e) !== numbers.lastIndexOf(n)) {
                answer.add(e + n);
            }
        });
    });

    return [...answer].sort((a, b) => a - b);
}