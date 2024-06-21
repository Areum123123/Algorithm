function solution(ingredient) {
    // ingredient (1,2,3,1만 포장)
    let burgerCount = 0;
    const burgerStack = [];
    
    // ingredient 배열의 요소에 접근하기 위한 반복문
    for (let i = 0; i < ingredient.length; i++) {
        // burgerStack에 push하여 배열에 넣어줍니다.
        burgerStack.push(ingredient[i]);
        
        // burgerStack의 현재 길이를 구합니다.
        let len = burgerStack.length;
        
        // burgerStack의 길이가 4가 되지 않을 경우에는 다음 요소로 넘어갑니다.
        if (burgerStack.length < 4) {
            continue;
        }
        else if (burgerStack[len - 4] === 1 &&
                burgerStack[len - 3] === 2 &&
                burgerStack[len - 2] === 3 &&
                burgerStack[len - 1] === 1) {
            // 1 2 3 1의 조건을 충족했을 때 pop를 4번해줘서 뒤의 요소 4개를 제거합니다.
            for (let j = 0; j < 4; j++) {
                burgerStack.pop();
            }
            // count 해줍니다.
            burgerCount++;
        }
    }
    
    return burgerCount;
}
출처: https://totally-developer.tistory.com/40 [Totally 개발자:티스토리]