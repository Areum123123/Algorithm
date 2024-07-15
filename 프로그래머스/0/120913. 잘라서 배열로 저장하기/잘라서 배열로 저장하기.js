function solution(my_str, n) {
    let answer = []
  for(let i = 0; i < my_str.length; i+=n){
      let cutString = my_str.substr(i , n)
      console.log(cutString)
     answer.push(cutString);
  }

 return answer;     
}
 
