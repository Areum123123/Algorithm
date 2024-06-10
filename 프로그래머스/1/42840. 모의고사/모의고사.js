function solution(answers) {
    // 수포자들의 답안 패턴 정의
    const su1 = [1, 2, 3, 4, 5];
    const su2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const su3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    // 각 수포자가 맞춘 문제 수를 저장할 배열
    let scores = [0, 0, 0];
    
    // 답안을 순회하면서 각 수포자의 점수를 계산
    answers.forEach((answer, index) => {
        if (answer === su1[index % su1.length]) scores[0]++;
        if (answer === su2[index % su2.length]) scores[1]++;
        if (answer === su3[index % su3.length]) scores[2]++;
    });
    
    // 최고 점수를 찾음
    const maxScore = Math.max(...scores);
    
    // 최고 점수를 받은 수포자를 결과 배열에 추가
    let result = [];
    scores.forEach((score, index) => {
        if (score === maxScore) {
            result.push(index + 1);
        }
    });
    
    // 결과를 정렬하고 반환
    result.sort();
    return result;
}
