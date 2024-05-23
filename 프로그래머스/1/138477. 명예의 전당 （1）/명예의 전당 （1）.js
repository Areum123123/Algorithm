function solution(k, score) {
    let result =[];
    let honor =[];
    
    for(let i =0; i<score.length; i++){
        if(i < k){
            honor.push(score[i]);
            result.push(Math.min(...honor));
        }
        
        else {
            honor.push(score[i]);
            honor.sort((a,b)=> b-a);
            honor.pop();
            result.push(Math.min(...honor));
            
        }
        
    }
    return result;
}