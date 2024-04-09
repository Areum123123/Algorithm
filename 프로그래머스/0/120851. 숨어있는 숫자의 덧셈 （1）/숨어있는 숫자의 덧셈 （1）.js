function solution(my_string) {
    let count = 0;
  for(let i =0; i < my_string.length; i++){
     if(!isNaN(parseInt(my_string[i]))){
         count += parseInt(my_string[i]);
     }
  }
    return count;
}