class PlantArray {
  constructor(str) {
    this.plants = [];
    this.newplants = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#') this.plants.push(i);
    }
  }

  add(val) {
    this.newplants.push(val);
  }

  replace() {
    this.plants = this.newplants;
    this.newplants = [];
  }

  getFirst() {
    return this.plants[0];
  }

  getLast() {
    return this.plants[this.plants.length - 1];
  }

  getSum() {
    return this.plants.reduce((a, b) => a + b, 0);
  }

  getPattern(index, len = 5) {
    const arr = [];
    for (let i = 0; i < len; i++) {
      if (this.plants.includes(i + index)) arr.push(i);
    }

    return arr;
  }

  static isMatching(a, b) {
    return a.length === b.length && a.every(e => b.includes(e));
  }
}

module.exports = PlantArray;
