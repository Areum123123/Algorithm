function solution(x) {
    let result =0;
    let stringX = String(x).split('')
    for(let el of stringX){
       result += (+el);
    }
    return x % result === 0;
}