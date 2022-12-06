import fs from 'node:fs';
import path from 'node:path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
console.log(`🚀 ~ input`, input);

const areDifferent = (chars: string[]) => {
  // check if all items in array are different

  console.log(`🚀 ~ areDifferent ~ chars`, chars);
  return chars.every((char, index) => {
    return chars.indexOf(char) === index;
  });
};

const chars = [];
for (let i = 0; i < input.length; i++) {
  if (chars.length === 14) {
    chars.shift();
  }
  chars.push(input[i]);
  if (chars.length === 14 && areDifferent(chars)) {
    break;
  }
  console.log(`🚀 ~ chars`, chars);
  console.log(`🚀 ~ i`, i + 2);
}
