function solution(answers) {
    var answer = [];
    var su1 = [1,2,3,4,5];
    var su2 = [2,1,2,3,2,4,2,5];
    var su3 = [3,3,1,1,2,2,4,4,5,5];
    var sumarr = [0,0,0];
  
    for(var i=0; i<answers.length; i++){
        if(answers[i]==su1[i%su1.length]) sumarr[0]++;
        if(answers[i]==su2[i%su2.length]) sumarr[1]++;
        if(answers[i]==su3[i%su3.length]) sumarr[2]++;
    }
    var maxValue = Math.max(...sumarr);
    for(var j=0; j<sumarr.length; j++){
        if(sumarr[j] == maxValue){
            answer.push(j+1);
        }
    }
    answer.sort();
    return answer;
}
