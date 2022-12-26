export class Map2D {
  mapArray: string[][];
  constructor(x: number, y: number) {
    this.mapArray = new Array(y);
    for (let i = 0; i < y; i += 1) {
      this.mapArray[i] = new Array(x);
    }
  }

  static toValidChar(c: string) {
    if (c === 'v' || c === '^') return '|';
    if (c === '<' || c === '>') return '-';
    return c.trim();
  }

  setCoord(x: number, y: number, char: string) {
    this.mapArray[y][x] = Map2D.toValidChar(char);
  }

  getCoord(x: number, y: number) {
    return this.mapArray[y][x];
  }
}
