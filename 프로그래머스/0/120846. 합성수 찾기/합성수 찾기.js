function solution(n) {
    let count = 0;
    for(let i=4; i <= n; i++){
        let a = false;
      for(let j=2; j <= n; j++){
          if(i % j === 0 && i!==j){
              a =true;
              break;
             
          }
      }
        if(a){
             count++
        }
    }
    return count;
}