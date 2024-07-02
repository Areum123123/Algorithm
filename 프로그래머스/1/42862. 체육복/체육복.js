function solution(n, lost, reserve) {
    let answer = 0;
    
  const noReserveLost = lost.sort((a,b)=>a-b).filter((lost) => !reserve.includes(lost));
  let haveReserve = reserve.sort((a,b)=>a-b).filter((reverse) => !lost.includes(reverse)); 
  const finalLost = noReserveLost.filter((lost) => {    
  const lend = haveReserve.find((reserve) => Math.abs(reserve - lost) == 1);    
     
  if(!lend) return lost;
  haveReserve = haveReserve.filter((reverse) => reverse !== lend);
    })
    answer = n - finalLost.length;
    return answer;
}