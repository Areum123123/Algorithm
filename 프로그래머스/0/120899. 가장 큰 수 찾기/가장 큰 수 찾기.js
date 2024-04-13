function solution(array) {
   let maxNum = Math.max(...array);
   let indexNum = array.indexOf(maxNum);
    
   
    return [maxNum, indexNum];
}