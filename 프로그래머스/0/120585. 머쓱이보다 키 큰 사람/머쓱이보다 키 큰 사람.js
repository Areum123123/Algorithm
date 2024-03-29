function solution(array, height) {
    let count = 0;
  for(let element of array){
      if(element > height){
          count += 1;
      }
  }
    return count
}