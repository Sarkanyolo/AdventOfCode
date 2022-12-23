export class Fabric {
  rows: number;
  arr: number[][];
  constructor(rows : number) {
    this.rows = rows;
    this.arr = this.Create2DArray();
  }

  Create2DArray() {
    const arr : number[][] = [];

    for (let i = 0; i < this.rows; i += 1) {
      arr[i] = [];

      // Add initial value to array elements
      for (let j = 0; j < this.rows; j += 1) {
        arr[i][j] = 0;
      }
    }

    return arr;
  }

  FillPatch(id: number, startx: number, starty: number, sizex: number, sizey : number) {
    for (let x = startx; x < startx + sizex; x += 1) {
      for (let y = starty; y < starty + sizey; y += 1) {
        if (this.arr[x][y] === 0) {
          this.arr[x][y] = id;
        } else {
          this.arr[x][y] = -1;
        }
      }
    }
  }

  getOverlapCount() {
    let counter = 0;
    for (let i = 0; i < this.rows; i += 1) {
      for (let j = 0; j < this.rows; j += 1) {
        if (this.arr[i][j] === -1) counter += 1;
      }
    }

    return counter;
  }

  GetNotOverlappedId(id: number, startx: number, starty: number, sizex: number, sizey : number) {
    for (let x = startx; x < startx + sizex; x += 1) {
      for (let y = starty; y < starty + sizey; y += 1) {
        if (this.arr[x][y] !== id) {
          return -1;
        }
      }
    }

    return id;
  }
}
