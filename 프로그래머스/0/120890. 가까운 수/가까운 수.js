function solution(array, n) {
    let result = []
 for(let i =0; i < array.length; i++){
     let near = Math.abs(array[i] - n)
     result.push(near);
     }  
   let minResult = Math. min(...result);
    let closestNumbers = [];
    
  for(let key in result){
      if(result[key] === minResult){
      closestNumbers.push(array[key]);  
          
      }
  }
    return Math.min(...closestNumbers);
    }