import fs from 'node:fs';
import path from 'node:path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const a = input.split('\r\n');
const b = a.map(data => {
  const arr = data.split('');
  const firstHalf = arr.slice(0, data.length / 2);
  const secondHalf = arr.slice(data.length / 2);
  return [firstHalf, secondHalf];
});

const c = b.map(([firstHalf, secondHalf]) => {
  for (let i = 0; i < firstHalf.length; i++) {
    for (let j = 0; j < secondHalf.length; j++) {
      if (firstHalf[i] === secondHalf[j]) {
        return firstHalf[i];
      }
    }
  }
  return 'no match';
});

const alphabet2x = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''
);
// const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const d = c.map(letter => {
  return alphabet2x.indexOf(letter) + 1;
});

console.log(`🚀 ~ a`, a);
// console.log(`🚀 ~ b`, b[0]);
// console.log(`🚀 ~ c ~ c`, c);
// console.log(`🚀 ~ d`, d);
// console.log(
//   `🚀 ~ d`,
//   d.reduce((a, b) => a + b)
// );
// console.log(alphabet2x.length);

//* part 2

const e = [];

for (let i = 0; i < a.length; i += 3) {
  const chunk = a.slice(i, i + 3);
  e.push(chunk);
}

// find the same letter in each array and return it once

const f = e.map(arr => {
  const firstHalf = arr[0].split('');
  const secondHalf = arr[1].split('');
  const thirdHalf = arr[2].split('');

  for (let i = 0; i < firstHalf.length; i++) {
    for (let j = 0; j < secondHalf.length; j++) {
      for (let k = 0; k < thirdHalf.length; k++) {
        if (firstHalf[i] === secondHalf[j] && secondHalf[j] === thirdHalf[k]) {
          return firstHalf[i];
        }
      }
    }
  }
  return 'no match';
});

const g = f.map(letter => {
  return alphabet2x.indexOf(letter) + 1;
});

console.log(`🚀 ~ e`, e);
console.log(`🚀 ~ f`, f);
console.log(`🚀 ~ g ~ g`, g);
console.log(
  `🚀 ~ g`,
  g.reduce((a, b) => a + b)
);
