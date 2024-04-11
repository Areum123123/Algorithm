function solution(my_string) {
    let answer = [];
    let arrayString = my_string.split('');
    
    for(let i=0; i < arrayString.length; i++){
   if(!isNaN(parseInt(arrayString[i]))){
       answer.push(parseInt(arrayString[i]));
     }
   }
  return answer.sort((a,b) => a-b);
}