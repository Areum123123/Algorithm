function solution(my_string) {
    const array = my_string.split(' ')
    console.log(array)
    
    let result = Number(array[0])
     
    for(let i = 1; i < array.length; i+=2){
        const num = Number(array[ i + 1]);
        const operator = array[i];
        
        switch(operator){
        
         case '+':
         result += num;
         break;
                
         case '-':
         result -= num;
          break;      
        }
        
        
    }
    return result
}