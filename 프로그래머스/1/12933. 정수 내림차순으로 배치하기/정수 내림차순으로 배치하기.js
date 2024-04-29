function solution(n) {
   let result = String(n).split('').sort((a,b)=>b-a).join('');
return Number(result);
}