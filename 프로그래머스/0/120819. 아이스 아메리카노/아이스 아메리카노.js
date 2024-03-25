function solution(money) {
    let howMany = Math.floor(money / 5500);
    let spareM = money - (howMany*5500);
    let result = [];

     result.push(howMany);
     result.push(spareM);
     return result; 
    }
   