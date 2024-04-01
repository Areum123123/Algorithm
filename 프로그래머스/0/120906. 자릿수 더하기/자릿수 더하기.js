function solution(n) {
    let answer = 0;
    let arrayNumber = n.toString().split('').map(Number);
    for(let i =0; i < arrayNumber.length; i++ ){
        answer += arrayNumber [i];
    }
    return answer;
}