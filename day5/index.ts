import fs from 'node:fs';
import path from 'node:path';

const input = fs.readFileSync(path.join(__dirname, 'input2.txt'), 'utf8');

const [columns, procedures] = input.split('\r\n\r\n');
console.log(`🚀 ~ columns`, columns);
const columnsClean = columns.split('\r\n').map(line =>
  [...line].filter((value, index) => {
    console.log(`🚀 ~ 333333333333333333333)`);
    console.log(`🚀 ~ [...line].filter ~ value`, value);
    console.log('🚀 ~ index', index);
    console.log(`🚀 ~ 333333333333333333333)`);
    return index % 4 === 1;
  })
);
console.log(`🚀 ~ columnsClean`, columnsClean);

const f = [];
// map every first element of e to f

for (let i = 0; i < columnsClean.length; i++) {
  const x = [];
  for (let j = 0; j < 5; j++) {
    try {
      x.push(columnsClean[j][i]);
    } catch (error) {
      x.push(null);
    }
  }
  f.push(x);
}

console.log(`🚀 ~ f`, f);
