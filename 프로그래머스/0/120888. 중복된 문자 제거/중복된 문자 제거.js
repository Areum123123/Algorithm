function solution(my_string) {
    let answer = '';
    for (let char of my_string) {
        if (answer.indexOf(char) === -1) {
            answer += char;
        }
    }
    return answer;
}





      