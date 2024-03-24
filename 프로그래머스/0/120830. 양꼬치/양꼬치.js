function solution(n, k) {
let  skewerPrice = n * 12000;
let drinkPrice = k * 2000;
let discountN = Math.floor(n * 0.1)
let answer =  skewerPrice + drinkPrice 
if(n < 10){
  return  answer;
} else if(n >= 10){
    return  answer -(2000 * discountN);;
}
}

