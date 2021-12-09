const fs = require('fs');

function getDiffs(input, input2) {
  let flag = 0;
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] !== input2[i]) flag += 1;
  }

  return flag;
}

function showMatch(input) {
  for (let row = 0; row < input.length; row += 1) {
    for (let row2 = row + 1; row2 < input.length; row2 += 1) {
      if (getDiffs(input[row], input[row2]) === 1) {
        return [input[row], input[row2]];
      }
    }
  }

  return undefined;
}

const input = fs.readFileSync('input.txt', 'utf8').split('\r\n');
const result = showMatch(input);
console.log('1st : ', result[0]);
console.log('2nd : ', result[1]);
