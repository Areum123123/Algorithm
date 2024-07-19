function solution(n) {
    
 let array = String(n).split('').reverse()
 
 return Number(array.sort((a,b) => b - a).join(''))
 
 }