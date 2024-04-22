function solution(absolutes, signs) {
    let count = 0;
    for(let i =0 ; i < absolutes.length ; i++){
      if(signs[i] === true){
         count += absolutes[i];
      } else if(signs[i] === false){
          count += (absolutes[i] * -1);
      }
    }
    return count;
}