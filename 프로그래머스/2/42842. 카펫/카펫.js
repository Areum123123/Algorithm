function solution(brown, yellow) {
    let answer = [];
    let total = brown + yellow; // 총 격자 갯수
    let width, height; // 가로길이, 세로길이
    
    // 총 격자 갯수를 2부터 (총갯수/2-1)까지의 숫자로 반복해서 나누기
    for(let i=2; i<total/2; i++) {
    
    	// (총갯수/i)가 정수가 아닐 경우는 제외
        if((total/i) % 1 !== 0 ) continue; 
        
        width = total/i; // 가로길이 = 총갯수/i
        height = total/width; // 세로길이 = 총갯수/가로길이
        
        // 가로길이가 세로길이보다 크거나 같아야함 (조건 참고)
        if(height > width) continue;
        
        // (가로길이*2) + (세로길이*2) - 4는 brown갯수와 같아야함
        if((width*2) + (height*2) - 4 === brown) {
            answer = [width, height];
            break;
        }
    }
    
    return answer;
}