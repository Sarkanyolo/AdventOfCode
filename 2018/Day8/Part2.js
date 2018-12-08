const fs = require('fs');

// return type of the recursive processNode function
class ChunkValuePair {
  constructor(chunk, value) {
    this.chunk = chunk;
    this.value = value;
  }
}

function processNode(nums) {
  const childs = nums[0];
  const meta = nums[1];
  let chunk = nums.slice(2);
  let nodeValue = 0;

  // Check whether need to sum the metadata ...
  if (childs === 0) {
    for (let i = 0; i < meta; i += 1) {
      nodeValue += chunk[i];
    }

  // ... or get the value of the children by reference
  } else {
    // Fill the cache with the values of the children
    const childValueCache = {};
    for (let i = 0; i < childs; i += 1) {
      const result = processNode(chunk);
      chunk = result.chunk;
      childValueCache[i + 1] = result.value;
    }

    // Process the child references from the cache
    for (let i = 0; i < meta; i += 1) {
      const childValue = childValueCache[chunk[i]];
      if (childValue !== undefined) {
        nodeValue += childValue;
      }
    }
  }

  return new ChunkValuePair(chunk.slice(meta), nodeValue);
}

const input = fs.readFileSync('i.txt', 'utf8').split(' ').map(x => +x);
console.log(processNode(input).value);
