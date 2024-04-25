function solution(emergency) {
    
    let order = emergency.slice().sort((a, b) => b - a);
    let result = [];
    
    for (let i = 0; i < emergency.length; i++) {
        
        let newIndex = order.indexOf(emergency[i]) + 1;
        result.push(newIndex);
    }
    return result;
}