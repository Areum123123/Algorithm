function solution(array) {
   let maxNum = Math.max(...array);
   let indexNum = array.indexOf(maxNum);
    
   array = [maxNum, indexNum];
    return array;
}