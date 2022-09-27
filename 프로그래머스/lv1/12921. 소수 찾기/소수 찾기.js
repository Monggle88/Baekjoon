function solution(n) {

    // 에라토스 테네스의 채
    // 소수 여부를 0,1로 나타내는 배열(Arr[index] = n) 생성
    // true로 가득 채운 후 소수가 아닌 수를 이후 false로 걸러낼 예정
    // index 0 ~ 1은 소수가 아니므로 미리 false를 채워둔다.
    let primeArr = Array(n + 1).fill(true).fill(false, 0, 2);

    // n의 제곱근 까지 반복
    // i = 2
    for (let i = 2; i * i <= n; i++) {
        // 배열에서 true를 발견한 경우
        if (primeArr[i]) {
            // i제곱 부터 시작하여 i의 배수로 반복
            for (let j = i * i; j <= n; j += i) {
                primeArr[j] = false;
            }
        }
    }

    // 소수의 갯수 반환
    return primeArr.filter(e => e).length
}