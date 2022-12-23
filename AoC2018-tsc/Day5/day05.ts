function react(str: string) {
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

function remove(str: string, chars: string) {
  const set = new Set(chars);
  return [...str].filter(i => !set.has(i)).join('');
}

function getMinLength(text : string) {
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

export function getDay05(input: string) {
  return [react(input), getMinLength(input)];
}
