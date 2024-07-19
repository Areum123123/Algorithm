function solution(n) {
 let a= String(n).split('').reverse()
 return Number(a.sort((a,b) => b - a).join(''))
 
 }