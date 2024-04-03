function solution(num_list) {
    let count = 0;
    let count1 = 0;
    let result = [0, 0];
    for(let i=0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0 ){
            
            result[0] = count += 1; 
        } else { 
             
            result[1] = count1 +=1 ; 
            
        }
    }
    return result;
}