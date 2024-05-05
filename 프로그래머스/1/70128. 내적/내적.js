function solution(a, b) {
    
  return a.reduce((acc, el, i) => acc + a[i]* b[i], 0);
}