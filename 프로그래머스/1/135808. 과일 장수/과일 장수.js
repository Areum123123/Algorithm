

function solution(k, m, score) {
   if(score.length < m){
        return 0;
    }
    
   score.sort((a,b)=> a-b);
    
    let total = 0
    while(score.length >= m){
     let array = score.splice(score.length - m, m);
      let price = m * Math.min(...array) ;
        
        total += price;
    }
    return total;

}