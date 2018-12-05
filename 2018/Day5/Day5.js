const fs = require('fs');

const text = fs.readFileSync('D:\\i.txt', 'utf8');

function react(str) {
  let oldlen = -1;
  while (oldlen !== str.length) {
    oldlen = str.length;
    for (let i = 0; i < 26; i += 1) {
      const ch1 = String.fromCharCode(97 + i);
      const ch2 = String.fromCharCode(65 + i);
      str = str.replace(ch1 + ch2, '').replace(ch2 + ch1, '');
    }
  }

  return str.length;
}

function remove(str, chars) {
  const set = new Set(chars);
  return [...str].filter(i => !set.has(i)).join('');
}

function getMinLength() {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < 26; i += 1) {
    const ch1 = String.fromCharCode(97 + i);
    const ch2 = String.fromCharCode(65 + i);
    const res = react(remove(text, ch1 + ch2));
    if (res < min) {
      min = res;
    }
  }

  return min;
}

console.log('Part1: ', react(text));
console.log('Part2: ', getMinLength());
