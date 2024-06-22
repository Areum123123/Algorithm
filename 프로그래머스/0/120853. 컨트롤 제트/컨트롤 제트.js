function solution(s) {
    let answer = 0;
    
    const arr = s.split(' ')
    
    let minus = 0;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i]==='Z'){
            answer -= minus;
        }else{
            answer += arr[i]*1
            minus = arr[i]*1
        }
    }
    
    return answer;
}