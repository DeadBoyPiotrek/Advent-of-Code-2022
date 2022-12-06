import fs from 'node:fs';
import path from 'node:path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const [columns, procedures] = input.split('\r\n\r\n');
console.log(`🚀 ~ columns`, columns);
const columnsClean = columns.split('\r\n').map(line =>
  [...line].filter((value, index) => {
    return index % 4 === 1;
  })
);
console.log(`🚀 ~ columnsClean`, columnsClean);

const columnsFinish: string[][] = [];

for (const line of columnsClean) {
  for (let i = 0; i < line.length; i++) {
    if (!columnsFinish[i]) {
      columnsFinish[i] = [];
    }
    if (line[i] !== ' ') {
      columnsFinish[i].unshift(line[i]);
    }
  }
}

console.log(`🚀 ~ columnsFinish`, columnsFinish);

console.log(`🚀 ~ procedures`, procedures);

//! we always grab one crate at a time !!!!!

//TODO get the clean procedures
const proceduresClean = procedures.split('\r\n').map(line => {
  // split line on 'move' 'from' 'to' regex
  const [string, move, from, to] = line.split(/move|from|to/);

  console.log(`🚀 ~ move`, move);
  console.log(`🚀 ~ from`, from);
  console.log(`🚀 ~ to`, to);
  return [move, from, to];
});

const proceduresCleanNumbers = proceduresClean.map(line => {
  return line.map(value => parseInt(value));
});

console.log(`🚀 ~ proceduresClean`, proceduresClean);
console.log(`🚀 ~ proceduresCleanNumbers`, proceduresCleanNumbers);

//* move 1 from 2 to 1
//* move 1(crate) from 2(st array) to 1(st array)
// move one item from second array to first array in the columnsFinish array

// for (const actions of proceduresCleanNumbers) {
//   const [amount, from, to] = actions;
//   for (let i = 0; i < amount; i++) {
//     const crate: string = columnsFinish[from - 1].pop()!;
//     columnsFinish[to - 1].push(crate);
//   }
// }

// console.log(`🚀 ~ columnsFinish`, columnsFinish);

// // get last item from each array and convert to string
// const result = columnsFinish.map(column => column[column.length - 1]).join('');

// console.log(`🚀 ~ result`, result);

//* part 2

for (const actions of proceduresCleanNumbers) {
  const [amount, from, to] = actions;

  // select amount of items from columnsFinish array and remove them
  const crates = columnsFinish[from - 1].splice(-amount, amount);
  // add the crates to the new array
  columnsFinish[to - 1].push(...crates);
}

console.log(`🚀 ~ columnsFinish`, columnsFinish);

// get last item from each array and convert to string
const result = columnsFinish.map(column => column[column.length - 1]).join('');

console.log(`🚀 ~ result`, result);
