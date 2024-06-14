function solution(lottos, win_nums) {
  const rankPerMatches = [6, 6, 5, 4, 3, 2, 1];

  const unknownNumberCount = lottos.filter((number) => number === 0).length;
  const matchCount = lottos.filter((number) => {
    if (win_nums.includes(number)) {
      return true;
    }
  }).length;

  const minimumRank = rankPerMatches[matchCount];
  const maximumRank = rankPerMatches[matchCount + unknownNumberCount];

  return [maximumRank, minimumRank];
}