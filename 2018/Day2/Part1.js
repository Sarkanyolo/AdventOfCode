const fs = require('fs');

function getTimes(input) {
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

function getResult(input) {
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

const input = fs.readFileSync('input.txt', 'utf8').split('\r\n');
console.log(getResult(input));
