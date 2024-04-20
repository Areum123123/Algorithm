function solution(order) {
    let count = 0;
    let str = String(Math.floor(order));
    let newArray = Array.from(str)
    for(let elements of newArray){
        if(elements % 3 === 0 && elements !== '0'){
            count++;
        }
    }
    return count;
}