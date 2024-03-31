
function solution(my_string, letter) {
    let answer = '';
    let templetArray = my_string.split('');
    
   for(let i =0; i < my_string.length; i++){
     if(templetArray[i] !== letter){
          answer += templetArray[i]
     }
      }
   return answer;
}