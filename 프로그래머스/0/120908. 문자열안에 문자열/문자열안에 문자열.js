function solution(str1, str2) {
   let includeString = str1.indexOf(str2)
   if(includeString === -1){
       return 2;
   } else {
       return 1;
   }
}