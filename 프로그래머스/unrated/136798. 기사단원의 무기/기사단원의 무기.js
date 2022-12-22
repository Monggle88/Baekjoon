function solution(number, limit, power) {
    const divisors = new Array(number + 1).fill(0);
    for (let i = 1; i <= number; i++) {
      for (let j = i; j <= number; j += i) {
        divisors[j]++;
      }
    }
    let iron = 0;
    for (let i = 1; i <= number; i++) {
      if (divisors[i] > limit) {
        iron += power;
      } else {
        iron += divisors[i];
      }
    }
    return iron;
  }