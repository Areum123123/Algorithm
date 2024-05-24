let day = ['SUN','MON', 'TUE', 'WED','THU', 'FRI', 'SAT'];

function solution(a, b) {
   let date = '2016-'+a +'-'+b;
   let date1 = new Date(date).getDay()
  return day[date1];
}

