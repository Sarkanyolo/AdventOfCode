import {Car, TurnChars, RoadChars} from './car';
import {Map2D} from './map2d';

class Day13 {
  cars: Car[];
  map: Map2D;
  constructor(input:string[]) {
    this.cars = [];
    this.map = new Map2D(input[0].length, input.length);
    this.init(input);
  }

  init(input:string[]) {
    const signs = 'v^<>';
    for (let y = 0; y < input.length; y += 1) {
      for (let x = 0; x < input[y].length; x += 1) {
        const char = input[y][x];
        this.map.setCoord(x, y, char);
        if (signs.includes(char)) {
          this.cars.push(new Car(x, y, char as TurnChars));
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
    let result : false | number[] = false;
    while (result === false) {
      this.cars.sort(Car.compareCars);
      for (let i = 0; i < this.cars.length; i += 1) {
        const coord = this.cars[i].getNextCoord();
        const char = this.map.getCoord(coord[0], coord[1]);
        this.cars[i].go(char as RoadChars);
        result = this.hasCrash();
      }
    }

    return result;
  }

  part2() {
    while (this.cars.length > 1) {
      for (let i = 0; i < this.cars.length; i += 1) {
        const coord = this.cars[i].getNextCoord();
        const char = this.map.getCoord(coord[0], coord[1]);
        this.cars[i].go(char as RoadChars);
        this.removeCrash();
      }
      this.cars = this.cars.filter(x => !x.removed).sort(Car.compareCars);
    }

    return [this.cars[0].x, this.cars[0].y]
  }
}

export function getDay13(input:string[]){
  const p1 = new Day13(input);
  const p2 = new Day13(input);
  return [p1.part1(), p2.part2()]
}
