function getTimes(input: string) {
  let flag = 0;
  for (let i = 0; i < input.length; i += 1) {
    let counter = 0;
    for (let j = 0; j < input.length; j += 1) {
      if (input[i] === input[j]) {
        counter += 1;
      }
    }
    if (counter > 1) {
      if (flag > 0 && counter !== flag) return 6;
      flag = counter;
    }
  }

  return flag;
}

function getResult(input: string[]) {
  let twos = 0;
  let threes = 0;

  for (let row = 0; row < input.length; row += 1) {
    const res = getTimes(input[row]);
    if (res === 2 || res === 6) {
      twos += 1;
    }
    if (res === 3 || res === 6) {
      threes += 1;
    }
  }

  return twos * threes;
}

function getDiffs(input: string, input2: string) {
  let flag = 0;
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] !== input2[i]) flag += 1;
  }

  return flag;
}

function showMatch(input: string[]): [string, string] {
  for (let row = 0; row < input.length; row += 1) {
    for (let row2 = row + 1; row2 < input.length; row2 += 1) {
      if (getDiffs(input[row], input[row2]) === 1) {
        return [input[row], input[row2]];
      }
    }
  }

  return ["", ""];
}

export function getDay02(input: string[]) {
  return [getResult(input), showMatch(input)[0]]
}