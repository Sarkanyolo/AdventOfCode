const fs = require('fs');
const Car = require('./car');
const Map2D = require('./map2d');

class Day13 {
  constructor(input) {
    this.cars = [];
    this.map = new Map2D(input[0].length, input.length);
    this.init(input);
  }

  init(input) {
    const signs = 'v^<>';
    for (let y = 0; y < input.length; y += 1) {
      for (let x = 0; x < input[y].length; x += 1) {
        const char = input[y][x];
        this.map.setCoord(x, y, char);
        if (signs.includes(char)) {
          this.cars.push(new Car(x, y, char));
        }
      }
    }
  }

  hasCrash() {
    for (let i = 0; i < this.cars.length - 1; i += 1) {
      for (let j = i + 1; j < this.cars.length; j += 1) {
        if (this.cars[i].x === this.cars[j].x && this.cars[i].y === this.cars[j].y) {
          return [this.cars[i].x, this.cars[i].y];
        }
      }
    }

    return false;
  }

  removeCrash() {
    let flag = false;
    for (let i = 0; i < this.cars.length - 1; i += 1) {
      for (let j = i + 1; j < this.cars.length; j += 1) {
        if (!this.cars[i].removed && !this.cars[j].removed) {
          if (this.cars[i].x === this.cars[j].x && this.cars[i].y === this.cars[j].y) {
            this.cars[i].removed = true;
            this.cars[j].removed = true;
            flag = true;
          }
        }
      }
    }

    return flag;
  }

  part1() {
    while (true) {
      this.cars.sort(Car.compareCars);
      for (let i = 0; i < this.cars.length; i += 1) {
        const coord = this.cars[i].getNextCoord();
        const char = this.map.getCoord(coord[0], coord[1]);
        this.cars[i].go(char);
        const result = this.hasCrash();
        if (result !== false) return result;
      }
    }
  }

  part2() {
    while (true) {
      if (this.cars.length === 1) return [this.cars[0].x, this.cars[0].y];
      for (let i = 0; i < this.cars.length; i += 1) {
        const coord = this.cars[i].getNextCoord();
        const char = this.map.getCoord(coord[0], coord[1]);
        this.cars[i].go(char);
        this.removeCrash();
      }
      this.cars = this.cars.filter(x => !x.removed).sort(Car.compareCars);
    }
  }
}

const input = fs.readFileSync('D:\\i.txt', 'utf8').split('\r\n');

let day13 = new Day13(input);
console.log('Part1: ', day13.part1());

day13 = new Day13(input);
console.log('Part2: ', day13.part2());
