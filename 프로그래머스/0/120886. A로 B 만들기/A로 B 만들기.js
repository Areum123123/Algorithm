function solution(before, after) {
    const arrayBefore = [...before].sort();
    const arrayAfter = [...after].sort();

    if(JSON.stringify(arrayBefore) === JSON.stringify(arrayAfter)){
        return 1;
    }
    return 0;
}