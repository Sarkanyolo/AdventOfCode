import {PlantArray} from './plantArray.js';

class Day12 {
  patterns: PlantArray[];
  plants: PlantArray;
  constructor(input : string[]) {
    this.patterns = [];
    this.plants = new PlantArray(input[0].split(' ')[2]);

    input.forEach((element) => {
      if (element.endsWith('#')) {
        this.patterns.push(new PlantArray(element.split(' => ')[0]));
      }
    });
  }

  hasPattern(pattern : number[]) {
    return this.patterns.some(e => PlantArray.isMatching(pattern, e.plants));
  }

  calculate(iteration : number) {
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

export function getDay12(input : string[]){
  const p1 = new Day12(input);
  const p2 = new Day12(input);
  return [p1.calculate(20), p2.calculate(125) + (50000000000 - 125) * 109]
}
