function solution(order) {
    let count = 0;
    let str = String(Math.floor(order));
    let newArray = Array.from(str)
    for(let i = 0; i < newArray.length; i++){
       if(newArray[i]  === "0") {
             
       } else if(newArray[i] % 3 === 0) {
            count += 1
       }
    }
   return count; 
}