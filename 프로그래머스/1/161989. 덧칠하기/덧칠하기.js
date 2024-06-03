function solution(n, m, sections) {
    let answer = 0;
    let painted = 0;
    for(let el of sections) {
        if(painted < el) {
            answer++;
            painted = el+m-1;
        }
    }
    return answer;
}