function solution(s) {
    var answer = '';
    
    s = s.split(' ');

    for (let i = 0; i < s.length; i++) {
        word = s[i].split('');
        
        for (let j = 0; j < word.length; j++) {
            if (j % 2 == 0) {
                word[j] = word[j].toUpperCase();
            } else {
                word[j] = word[j].toLowerCase();
            }
        }

        s[i] = word.join('');
    }

    return s.join(' ');
}