let p1count = 0;

function part1(numArray: number[]) {
  const childs = numArray[0];
  const meta = numArray[1];
  let chunk = numArray.slice(2);

  // Process children recursively
  for (let i = 0; i < childs; i += 1) {
    chunk = part1(chunk);
  }

  // Process metadata
  for (let i = 0; i < meta; i += 1) {
    p1count += chunk[i];
  }

  return chunk.slice(meta);
}


// return type of the recursive processNode function
class ChunkValuePair {
  chunk: number[];
  value: number;
  constructor(chunk: number[], value: number) {
    this.chunk = chunk;
    this.value = value;
  }
}

function processNode(nums: number[]) {
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
    const childValueCache: { [key: number]: number } = {};
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

export function getDay08(input: number[]) {
  part1(input);
  return [p1count, processNode(input).value];
}
