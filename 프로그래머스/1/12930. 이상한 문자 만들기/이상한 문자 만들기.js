function solution(s) {
    let words = s.split(' '); // 공백을 기준으로 문자열을 단어 단위로 분리
    let result = '';

    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        for (let j = 0; j < word.length; j++) {
            if (j % 2 === 0) {
                result += word[j].toUpperCase();
            } else { 
                result += word[j].toLowerCase();
            }
        }
        if (i !== words.length - 1) { // 마지막 단어가 아닌 경우에는 공백 추가
            result += ' ';
        }
    }
    return result;
}

