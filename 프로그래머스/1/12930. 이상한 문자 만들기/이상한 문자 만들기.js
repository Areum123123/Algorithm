function solution(s) {
    let arrayS = s.split(' ')
    let result = '';
    for (let i = 0; i < arrayS.length; i++) {
        for (let j = 0; j < arrayS[i].length; j++) {
            if (j % 2 === 0) {
                result += arrayS[i][j].toUpperCase();
            } else {
                result += arrayS[i][j].toLowerCase();
            }
        }
        result += ' ';
    }
    
    return result.slice(0, result.length-1);
}

