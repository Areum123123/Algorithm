function solution(phone_number) {
  const arrayNumber = phone_number.split('')
  for (let i =0; i <phone_number.length-4; i++){
      
      arrayNumber[i] ='*'
  }
    
    return arrayNumber.join('')
}