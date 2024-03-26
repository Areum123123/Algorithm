let numbers = [1, 2, 3, 4, 5]

function solution(numbers) {
    let maxProduct = -Infinity;

    for (i = 0; i < numbers.length; i++) {
        for (j = i+1; j < numbers.length; j++) {
            let first = numbers[i];
            let second = numbers[j];
            let num = first * second
           
             if(num > maxProduct) {
                   maxProduct = num;
              }
             }
            }
               return maxProduct; 
        }
    
    
  




