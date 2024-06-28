function solution(X, Y) {
 
    let sumString=''
    for(let i=9; i>=0; --i){
        let array1 =[...X].filter((val)=>{ return Number(val)===i})
        let array2 =[...Y].filter((val)=>{ return Number(val)===i})
        sumString+=String(i).repeat(Math.min(array1.length,array2.length))
    }
 
    if(sumString==='') return "-1"
    if(Number(sumString)===0) return "0";
 
    return sumString
}
