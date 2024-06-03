function solution(n, m, section) {
    let result = 0;
    let painted =0;
    
    for(let i  of section){
        if(i < painted){
            continue;
        }
        painted = i+m;
        result += 1;
    }
    return result;
}