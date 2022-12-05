import fs from 'node:fs';
import path from 'node:path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const a = input.split('\r\n');

console.log(`🚀 ~ a`, a);

const b = a.map(x => x.split(/[,-]/));
const c = b.map(x => x.map(y => parseInt(y)));
console.log(`🚀 ~ b`, b);
console.log(`🚀 ~ c`, c);

// check if [ a b c d ]  a<=c && b>=d || a>=c && b<=d

let count = 0;

const d = c.map(([a, b, c, d]) => {
  if (a <= c && b >= d) {
    count++;
    return true;
  } else if (a >= c && b <= d) {
    count++;
    return true;
  } else return false;
});
console.log(`🚀 ~ d`, d);
console.log(`🚀 ~ count`, count);

// part 2

const createArrs = (a: number, b: number) =>
  Array.from({ length: b - a + 1 }, (_, i) => a + i);

let count2 = 0;
const e = c.map(([a, b, c, d]) => {
  const one = createArrs(a, b);
  const two = createArrs(c, d);

  if (one.some(f => two.includes(f))) {
    count2++;
  }
});

console.log(count2);
