function solution(i, j, k) {
  let result =0;
    for(let x = i; x <= j; x++){
        let strX = String(x)
      for(let y =0; y <strX.length; y++){
       if(strX[y] === String(k)){
           result ++;
       }    
      }  
    }
    return result;
}