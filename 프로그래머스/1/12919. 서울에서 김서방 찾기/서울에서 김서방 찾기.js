function solution(seoul) {
   for(let el in seoul){
      if(seoul[el] === 'Kim'){
       return `김서방은 ${el}에 있다`;
      }
   }  
}