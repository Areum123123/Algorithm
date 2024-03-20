function solution(numbers) {
    let j = 0;
    for(let i =0; i < numbers.length; i++ ){
       let number =  numbers[i];
        j += number;
    }
   return j / numbers.length;
}


