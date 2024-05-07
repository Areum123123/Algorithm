function solution(s) {
  let sArray = s.split('');
    

    if(s.length === 4 || s.length === 6){
      return sArray.every((el) => !isNaN(el))
    } else {
      return false    
    }
      }