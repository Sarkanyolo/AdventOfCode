class Map2D {
  constructor(x, y) {
    this.mapArray = new Array(y);
    for (let i = 0; i < y; i += 1) {
      this.mapArray[i] = new Array(x);
    }
  }

  static toValidChar(c) {
    if (c === 'v' || c === '^') return '|';
    if (c === '<' || c === '>') return '-';
    return c.trim();
  }

  setCoord(x, y, char) {
    this.mapArray[y][x] = Map2D.toValidChar(char);
  }

  getCoord(x, y) {
    return this.mapArray[y][x];
  }
}

module.exports = Map2D;
