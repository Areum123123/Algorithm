function solution(spell, dic) {
    let result = [];
    
   dic.forEach((dic)=>{
       let count = 0;
       spell.forEach((spell)=>{
           
          if(dic.includes(spell)){
              count += 1;
          } 
         
       })
        if(spell.length === count){
              result.push(dic)
          } 
       
       
   })
    return result.length === 0 ? 2: 1;
}