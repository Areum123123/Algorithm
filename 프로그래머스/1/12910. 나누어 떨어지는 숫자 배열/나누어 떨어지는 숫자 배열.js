function solution(arr, divisor) {
   let answer = [];
 for(let el of arr){
     if(el % divisor === 0){
         answer.push(el);
     }
 }
    if(answer.length === 0){
        answer.push(-1);
    }
    return answer.sort((a, b) => a-b);
   
}