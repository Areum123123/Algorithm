function solution(n) {
 
  const changeArray = String(n).split('').reverse()
  return changeArray.map(n => parseInt(n))
}