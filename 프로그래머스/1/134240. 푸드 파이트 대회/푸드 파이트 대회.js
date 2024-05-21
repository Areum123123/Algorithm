function solution(food) {
    let result ='';
    for(let i =0; i < food.length; i++){
        if(food[i] > 1){
            let count = Math.floor(food[i]/2);
            result += String(i).repeat(count);
        }
    }
    let reverse = result.split('').reverse().join('');
    return result + '0'+reverse;
}