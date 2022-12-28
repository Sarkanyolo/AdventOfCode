function part1(input: string[]) {
  let sum = 0;
  for (const str of input) {
    sum += +str;
  }
  return sum;
}

function part2(input: string[]) {
  const freqs : Set<number> = new Set();
  freqs.add(0);
  let sum = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    for (const str of input) {
      sum += +str;
      if (freqs.has(sum)) {
        return sum;
      }
      freqs.add(sum);
    }
  }
}

export function getDay01(input: string[]) {
  return [part1(input), part2(input)]
}