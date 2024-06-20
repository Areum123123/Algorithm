function solution(s, skip, index) {
    const skipCode = [...skip].map(v => v.charCodeAt());
    return [...s].map(v => {
        let asciiCode = v.charCodeAt();
        for (let i = 0; i < index; i++) {
            asciiCode++;
            if (asciiCode > 122) asciiCode -= 26;
            
            while (skipCode.includes(asciiCode)) {
                asciiCode++;
                if (asciiCode > 122) asciiCode -= 26;
            }
        }
        return String.fromCodePoint(asciiCode);
    }).join('');
}