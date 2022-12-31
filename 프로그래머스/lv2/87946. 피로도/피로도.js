function solution(k, dungeons) {
    let answer = [];
    let enterArr = Array(dungeons.length).fill(false);
  
    function sol2(count, k) {
      answer.push(count);
  
      for (let i = 0; i < dungeons.length; i++) {
        let enterK = dungeons[i];
        if (k >= enterK[0] && !enterArr[i]) {
          enterArr[i] = 1;
          sol2(count + 1, k - enterK[1]);
          enterArr[i] = 0;
        }
      }
    }
  
    sol2(0, k);
  
    return Math.max(...answer);
  }