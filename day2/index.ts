import fs from 'node:fs';
import path from 'node:path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

//* '\r\n\r\n' means split on empty line
//* '\r\n' means split on new line

// 1 for rock, 2 for paper, 3 for scissors
//
// @ts-ignore
const result = ([opp, me]) => {
  const rock = 1;
  const paper = 2;
  const scissors = 3;
  const win = 6;
  const lose = 0;
  const draw = 3;
  // x for rock
  // y for paper
  // z for scissors

  if (opp === 'A' && me === 'Y') return win + paper;
  else if (opp === 'A' && me === 'X') return draw + rock;
  else if (opp === 'B' && me === 'Z') return win + scissors;
  else if (opp === 'B' && me === 'Y') return draw + paper;
  else if (opp === 'C' && me === 'X') return win + rock;
  else if (opp === 'C' && me === 'Z') return draw + scissors;
  else if (opp === 'A' && me === 'Z') return lose + scissors;
  else if (opp === 'B' && me === 'X') return lose + rock;
  else if (opp === 'C' && me === 'Y') return lose + paper;
  else return 0;
};

// @ts-ignore
const replace = ([opp, me]) => {
  const rock = 1;
  const paper = 2;
  const scissors = 3;
  const win = 6;
  const lose = 0;
  const draw = 3;
  // x for rock
  // y for paper
  // z for scissors

  if (opp === 'A' && me === 'Y') return draw + rock; //
  else if (opp === 'A' && me === 'X') return lose + scissors; //
  else if (opp === 'B' && me === 'Z') return win + scissors; //
  else if (opp === 'B' && me === 'Y') return draw + paper; //
  else if (opp === 'C' && me === 'X') return lose + paper; //
  else if (opp === 'C' && me === 'Z') return win + rock; //
  else if (opp === 'A' && me === 'Z') return win + paper; //
  else if (opp === 'B' && me === 'X') return lose + rock; //
  else if (opp === 'C' && me === 'Y') return draw + scissors; //
  else return 2;
};
// x means you need to lose
// y means you need to drat
// z means you need to win

const a = input.split('\r\n');
const b = a.map(string => {
  return string.split(' ');
});
// @ts-ignore
const c = b.map(arr => replace(arr));
console.log(`🚀 ~ a`, a);
console.log(`🚀 ~ b ~ b`, b);
console.log(`🚀 ~ c`, c);
console.log(c.reduce((a, b) => a + b));
