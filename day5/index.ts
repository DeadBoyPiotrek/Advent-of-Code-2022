import fs from 'node:fs';
import path from 'node:path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const [columns, procedures] = input.split('\r\n\r\n');
console.log(`🚀 ~ columns`, columns);
const b = columns.split('\r\n');
const c = b.map(x => x.split('    '));
const d = c.map(x => x.map(y => y.split('  ')));
// regex ro split on  '    ' and ' '
const e = b.map(y => y.split(/ +/));
e.reverse();
// delete first and last element from e
e[0].pop();
e[0].shift();

console.log(`🚀 ~ e`, e);
const f = [];
// map every first element of e to f

for (let i = 0; i < e.length; i++) {
  const x = [];
  for (let j = 0; j < 10; j++) {
    try {
      console.log('i:', i);
      console.log('j:', j);
      x.push(e[j][i]);
    } catch (error) {
      x.push(null);
    }
  }
  f.push(x);
}

console.log(`🚀 ~ b`, b);
console.log(`🚀 ~ c`, c);
console.log(`🚀 ~ d`, d);
console.log(`🚀 ~ e`, e);
console.log(`🚀 ~ f`, f);
