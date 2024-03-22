function solution(n, t) {
  let countN = n*2
  for(let i = 1; i < t ; i++){
  countN *=2;         
  }
    return countN;
}
