function solution(my_string) {
    let result =0;
   const array = my_string.split(/[A-z]/);
    for(let el of array){
       if(el !==''){
        result += +el   ;
       }  
        
    }
    return result;
}