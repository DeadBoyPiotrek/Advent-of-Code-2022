import fs from 'node:fs';
import path from 'node:path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const a = input.split('\r\n\r\n');
const b = a.map(data => data.split('\r\n'));

const c = b
  .map(elf => {
    return elf
      .map(string => {
        return Number(string);
      })
      .reduce((a, b) => a + b);
  })
  .sort((a, b) => b - a);

console.log(`🚀 ~ a`, a);
console.log(`🚀 ~ b`, b);
console.log(`🚀 ~ c`, c);
console.log(c[0] + c[1] + c[2]);
