const fs = require('fs');

const input = fs.readFileSync('D:\\i.txt', 'utf8').split('\r\n');

class Car {
  constructor(x, y, character) {
    this.x = x;
    this.y = y;
    this.direction = Car.characterToDirection(character);
  }

  static characterToDirection(character) {
    switch (character) {
      case 'v':
        return 'down';
      case '^':
        return 'up';
      case '<':
        return 'left';
      case '>':
        return 'right';
      default:
        throw new Error('Invalid direction');
    }
  }

  turnLeft() {
    switch (this.direction) {
      case 'left':
        this.direction = 'down';
        break;
      case 'down':
        this.direction = 'right';
        break;
      case 'right':
        this.direction = 'up';
        break;
      case 'up':
        this.direction = 'left';
        break;
      default:
        throw new Error('Invalid direction');
    }
  }

  turnRight() {
    this.turnLeft();
    this.turnLeft();
    this.turnLeft();
  }
}

function getMap(x, y) {
  const map = new Array(y);
  for (let i = 0; i < y; i += 1) {
    map[i] = new Array(x).fill('#');
  }

  return map;
}

function getMapChar(c) {
  if (c === 'v' || c === '^') return '|';
  if (c === '<' || c === '>') return '-';
  return c;
}

const cars = [];
const signs = 'v^<>';
const map = getMap(input[0].length, input.length);

for (let y = 0; y < input.length; y += 1) {
  for (let x = 0; x < input[y].length; x += 1) {
    const char = input[y][x];
    map[y][x] = getMapChar(char);
    if (signs.includes(char)) {
      cars.push(new Car(x, y, char));
    }
  }
}

console.dir(cars);
console.dir(map);
