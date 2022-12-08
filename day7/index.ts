import fs from 'node:fs';
import path from 'node:path';

const input = fs.readFileSync(path.join(__dirname, 'input2.txt'), 'utf8');
const lines = input.split('\r\n');

const createTree = (input: string) => {
  const tree = {
    name: '/',
    isDirectory: true,
    children: [],
  }; //node:  name, isDirectory, size, children

  let currentNode = tree;
  let currentCommand = null;
  for (const line of lines) {
    if (line[0] === '$') {
      //command
      /\$ (?<command>\w+)(?: (?<arg>.+))?/.exec(line);
    }
  }

  return tree;
};

(function part1() {
  console.log(lines);
  const tree = createTree(input);
  console.log(tree);
})();
