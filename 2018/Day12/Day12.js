const fs = require('fs');
const PlantArray = require('./plantArray');

class Day12 {
  constructor(input) {
    this.patterns = [];
    this.plants = new PlantArray(input[0].split(' ')[2]);

    input.forEach((element) => {
      if (element.endsWith('#')) {
        this.patterns.push(new PlantArray(element.split(' => ')[0]));
      }
    });
  }

  hasPattern(p) {
    return this.patterns.some(e => PlantArray.isMatching(p, e.plants));
  }

  calculate(iteration) {
    for (let count = 0; count < iteration; count++) {
      for (let i = this.plants.getFirst() - 4; i < this.plants.getLast() + 4; i++) {
        if (this.hasPattern(this.plants.getPattern(i))) {
          this.plants.add(i + 2);
        }
      }
      this.plants.replace();
    }

    return this.plants.getSum();
  }
}

const input = fs.readFileSync('D:\\i.txt', 'utf8').split('\r\n');

let d12 = new Day12(input);
console.log('Part1: ', d12.calculate(20));

d12 = new Day12(input);
console.log('Part2: ', d12.calculate(125) + (50000000000 - 125) * 109);
