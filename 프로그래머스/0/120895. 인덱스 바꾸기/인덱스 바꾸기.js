function solution(my_string, num1, num2) {
    let array = my_string.split('');
    let copy1 = array.slice(num1, num1 + 1);
    let copy2 = array.slice(num2, num2 + 1);
    array.splice(num1, 1, copy2);
    array.splice(num2, 1, copy1);
    
    return array.join('');
}