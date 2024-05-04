function solution(s) {
    let result = '';
    const middle = Math.floor(s.length/2)
   if(s.length % 2 === 0){
       result += s[middle-1]
       result += s[middle]
       
   } else {
       result += s[middle]       
   }
    return result
}