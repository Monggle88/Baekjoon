function solution(k, tangerine) {
    const gulMap = new Map();
    let answer = 0;

    tangerine.forEach((org) => {
        gulMap.set(org, gulMap.has(org) ? gulMap.get(org) + 1 : 1);
    });

    const sortArr = [...gulMap].sort((a, b) => b[1] - a[1]);

    sortArr.forEach((arr) => {
        if (k > 0) {
            k -= arr[1];

            answer++;
        }
    });

    return answer;
}
