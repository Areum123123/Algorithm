function solution(my_string) {
   let changeS = my_string.toLowerCase();
   let arrayS = changeS.split('');
           arrayS.sort((a, b) => a.localeCompare(b));
    return arrayS.join('');
    
}