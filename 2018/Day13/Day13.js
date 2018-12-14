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

  static compareCars(x, y) {
    const res = x.y - y.y;
    return res !== 0 ? res : x.x - y.x;
  }

  getNextCoord() {
    const coord = Object;
    coord.x = this.x;
    coord.y = this.y;

    switch (this.direction) {
      case 'up':
        coord.y -= 1;
        break;
      case 'down':
        coord.y += 1;
        break;
      case 'left':
        coord.x -= 1;
        break;
      case 'right':
        coord.y += 1;
        break;
      default:
        throw new Error('Invalid direction');
    }

    return coord;
  }

  go(char) {
    // TODO
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

class Map {
  constructor(x, y) {
    this.map = new Array(y);
    for (let i = 0; i < y; i += 1) {
      this.map[i] = new Array(x);
    }
  }

  static toValidChar(c) {
    if (c === 'v' || c === '^') return '|';
    if (c === '<' || c === '>') return '-';
    return c.trim();
  }

  setCoord(x, y, char) {
    this.map[y][x] = Map.toValidChar(char);
  }

  getCoord(x, y) {
    return this.map[y][x];
  }
}

const cars = [];
const signs = 'v^<>';
const map = new Map(input[0].length, input.length);

for (let y = 0; y < input.length; y += 1) {
  for (let x = 0; x < input[y].length; x += 1) {
    const char = input[y][x];
    map.setCoord(x, y, char);
    if (signs.includes(char)) {
      cars.push(new Car(x, y, char, map));
    }
  }
}

function hasCrash() {
  for (let i = 0; i < cars.length - 1; i += 1) {
    for (let j = i + 1; j < cars.length; j += 1) {
      if (cars[i].x === cars[j].x && cars[i].y === cars[j].y) {
        console.log(cars[i].x, cars[i].y);
        return true;
      }
    }
  }

  return false;
}

function run() {
  while (true) {
    cars.sort(Car.compareCars);
    for (let i = 0; i < cars.length; i += 1) {
      const coord = cars[i].getNextCoord();
      const char = map.getCoord(coord.x, coord.y);
      cars[i].go(char);
      if (hasCrash()) return 0;
    }
  }
}

run();
