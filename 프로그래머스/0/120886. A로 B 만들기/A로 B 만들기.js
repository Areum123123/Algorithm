function solution(before, after) {
    const arrayBefore = [...before].sort();
    const arrayAfter = [...after].sort();
    console.log(arrayBefore)
    console.log(arrayAfter)
    if(JSON.stringify(arrayBefore) === JSON.stringify(arrayAfter)){
        return 1
    }
    return 0
}