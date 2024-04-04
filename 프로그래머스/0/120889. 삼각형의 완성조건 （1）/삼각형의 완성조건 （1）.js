function solution(sides) {
    let long = Math.max(...sides);
    let totalSum = 0;
    
    for(let element of sides){
        totalSum += element;
    }
   
    return (totalSum - long) > long ? 1 : 2 ;
}