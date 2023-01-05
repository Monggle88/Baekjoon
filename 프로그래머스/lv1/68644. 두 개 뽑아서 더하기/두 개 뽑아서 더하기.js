function solution(numbers) {
    let answer = new Set();

    const nums = [...new Set(numbers)];

    numbers.forEach((e) => {
        numbers.forEach((n) => {
            if (numbers.indexOf(e) !== numbers.lastIndexOf(n)) {
                answer.add(e + n);
            }
        });
    });

    return [...answer].sort((a, b) => a - b);
}