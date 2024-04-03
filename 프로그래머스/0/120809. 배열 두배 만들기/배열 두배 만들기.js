function solution(numbers) {
    var answer = [];
    let keys = Object.values(numbers)
     for(let i=0 ; i < numbers.length; i++){
        answer[i] = keys[i] * 2
     }
     return answer;
    }
 