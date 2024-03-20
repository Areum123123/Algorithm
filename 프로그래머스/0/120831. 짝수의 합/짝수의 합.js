function solution(n) {
    let number = 0;
 for(let i = 0; i <= n; i++){
   if(i % 2 === 0){
       number += i;
   }
 }
  return number;
}



