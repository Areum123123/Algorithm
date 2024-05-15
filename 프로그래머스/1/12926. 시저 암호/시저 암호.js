let lowerCase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase= lowerCase.map(el => el.toUpperCase());


function solution(s, n) {
   let result = '';
  
    for(let i =0; i<s.length; i++){
    let textS = s[i];
     if(textS === ' '){
        result += ' ';
      }   else if(textS === textS.toUpperCase()){
         let newIndex = (upperCase.indexOf(textS)+n) % 26
      result += upperCase[newIndex] ;
      } else{
          let newIndex = (lowerCase.indexOf(textS)+n) % 26
      result += lowerCase[newIndex];
      }
    }
    return result;
}