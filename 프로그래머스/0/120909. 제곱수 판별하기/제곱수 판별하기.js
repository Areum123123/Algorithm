function solution(n) {
    let squareR = Math.sqrt(n) //정수 소수
    let integer = Math.floor(squareR) //정수
  if(squareR === integer){
    return 1;
  } else{ 
    return 2;
  }
    
}