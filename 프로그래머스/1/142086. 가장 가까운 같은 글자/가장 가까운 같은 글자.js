function solution(s) {
    let result =[];  //-1과 가까운 중복값 인덱스
    let compare =[]; //비교군
    
    for(let i =0; i<s.length; i++){
      if(!compare.includes(s[i])){
          result.push(-1);
          compare.push(s[i]);
      } else {
          result.push(compare.length - compare.lastIndexOf(s[i]));
          compare.push(s[i]);
      }
    }
    return result;
}