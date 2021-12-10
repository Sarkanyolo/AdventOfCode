const fs = require('fs');
const Fabric = require('./fabric');

class Day3 {
  constructor() {
    this.text = fs.readFileSync('D:\\i.txt', 'utf8').split('\r\n');
    this.fabric = new Fabric(1000);
  }

  // eslint-disable-next-line class-methods-use-this
  getParams(line) {
    return line.split(/#| |@|:|x|,/).filter(e => e !== '');
  }

  part1() {
    this.text.forEach((element) => {
      const p = this.getParams(element);
      this.fabric.FillPatch(+p[0], +p[1], +p[2], +p[3], +p[4]);
    });

    return this.fabric.getOverlapCount();
  }

  part2() {
    let result;
    this.text.forEach((element) => {
      const p = this.getParams(element);
      const res = this.fabric.GetNotOverlappedId(+p[0], +p[1], +p[2], +p[3], +p[4]);

      if (res > -1) result = res;
    });

    return result;
  }
}

const day3 = new Day3();
console.log(day3.part1());
console.log(day3.part2());
