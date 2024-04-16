function solution(num, k) {
   
    const numString = num.toString();
    const arrayNum = numString.split('').map(Number);
    for (let i = 0; i < arrayNum.length; i++) {
        if (k === arrayNum[i]) {
            return i + 1;
        }
    }
    return -1;
}