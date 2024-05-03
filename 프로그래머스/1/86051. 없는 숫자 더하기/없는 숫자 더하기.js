function solution(numbers) {
    let answer =0;
    let newArr = numbers.sort((a,b)=>a-b)
    console.log(newArr)
    for(let i=0; i<10; i++){
        if(numbers.indexOf(i) === -1){
         answer += i
        }
      }
   return answer;
    }