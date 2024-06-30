function factorial(x){
    let result =1
    for(let i =1; i<=x; i++){
        result *= i
    }
    return result;
}


function solution(balls, share) {
    
  let answer = factorial(balls) / (factorial(balls - share) * factorial(share))
    
    return Math.round(answer);
}