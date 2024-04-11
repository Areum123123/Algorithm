function solution(numbers) {
    let arrayNumbers = [];
    for(let i= 0; i<numbers.length ; i++){
        for(let j= i+1; j<numbers.length ; j++){
        arrayNumbers.push(numbers[i] * numbers[j]);
    } 
  }
   return Math.max(...arrayNumbers);   
}