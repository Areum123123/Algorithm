function solution(sides) {
    let long = Math.max(...sides);
    let totalSum = 0;
    
    for(let element of sides){
        totalSum += element;
    }
    let sumTwo = totalSum - long
    return sumTwo > long ? 1 : 2 ;
}