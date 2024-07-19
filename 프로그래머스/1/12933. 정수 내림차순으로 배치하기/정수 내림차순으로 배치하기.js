function solution(n) {
    
 let array = String(n).split('').sort((a,b) => b - a).join('')
 
 return Number(array)
 
 }