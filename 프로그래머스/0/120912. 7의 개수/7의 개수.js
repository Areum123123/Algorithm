function solution(array) {
 let count = 0;
 let newArr =array.join('').split('')
 for(let element of newArr)
 if(element === '7'){
    count++;
 }
 return count;
}