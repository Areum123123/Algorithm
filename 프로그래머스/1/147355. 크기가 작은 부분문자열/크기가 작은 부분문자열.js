function solution(t, p) {
    let result = 0;
   for(let i =0; i <=t.length-p.length; i++){
  let part = t.slice(i, p.length +i);
       if(part <= p){
           result ++;
       }
   }
    return result;
}