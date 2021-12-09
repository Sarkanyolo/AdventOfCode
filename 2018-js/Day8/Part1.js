const fs = require('fs');

let count = 0;

function processNode(numArray) {
  const childs = numArray[0];
  const meta = numArray[1];
  let chunk = numArray.slice(2);

  // Process children recursively
  for (let i = 0; i < childs; i += 1) {
    chunk = processNode(chunk);
  }

  // Process metadata
  for (let i = 0; i < meta; i += 1) {
    count += chunk[i];
  }

  return chunk.slice(meta);
}

const input = fs.readFileSync('i.txt', 'utf8').split(' ').map(x => +x);
processNode(input);

console.log(count);
