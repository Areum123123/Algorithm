function solution(n) {
   let answer = [];
   let arr =String(n).split('');
 for(let el of arr){ 
     answer.push(Number(el));
 }
  return  answer.reverse();
}