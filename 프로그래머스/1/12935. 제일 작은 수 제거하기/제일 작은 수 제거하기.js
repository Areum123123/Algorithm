function solution(arr) {
     arr.splice(arr.indexOf(Math.min(...arr)), 1); //최소값삭제
    if(arr.length ===0 || arr === [10]){
        return [-1]
    } 
    return arr;
}