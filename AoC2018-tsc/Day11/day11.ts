class Day11 {
  size: number;
  sn: number;
  grid: number[][];
  constructor(size: number, sn: number) {
    this.size = size;
    this.sn = sn;
    this.grid = this.getGrid();
  }

  getPower(x: number, y: number) {
    const id = x + 10;
    const power = (id * y + this.sn) * id;

    // if hundreds digit is 0, we can shortcut the value
    if (power < 100) return -5;

    // convert value to string, to get the hundreds digit
    const powerStr = (`${power}`);
    return +(powerStr[powerStr.length - 3]) - 5;
  }

  getGrid() {
    // create grid
    const grid = new Array(this.size);
    for (let x = 0; x < this.size; x += 1) {
      grid[x] = new Array(this.size);
    }

    // Fill with Power values
    for (let x = 1; x < this.size; x += 1) {
      for (let y = 1; y < this.size; y += 1) {
        grid[x][y] = this.getPower(x, y);
      }
    }

    return grid;
  }

  getValue(coordx: number, coordy: number, gridSize: number) {
    // Filter out invalid gridsizes
    if (coordx + gridSize > this.size - 1 || coordy + gridSize > this.size - 1) {
      return Number.MIN_SAFE_INTEGER;
    }

    let val = 0;
    for (let x = coordx; x < coordx + gridSize; x += 1) {
      for (let y = coordy; y < coordy + gridSize; y += 1) {
        val += this.grid[x][y];
      }
    }

    return val;
  }

  part1(resultGrid: number) {
    let max = Number.MIN_SAFE_INTEGER;
    let coord = '';
    for (let x = 1; x < this.size - resultGrid; x += 1) {
      for (let y = 1; y < this.size - resultGrid; y += 1) {
        const res = this.getValue(x, y, resultGrid);
        if (max < res) {
          max = res;
          coord = `${x},${y}`;
        }
      }
    }

    return coord;
  }

  part2() {
    let max = Number.MIN_SAFE_INTEGER;
    let coord = '';
    for (let x = 1; x < this.size; x += 1) {
      for (let y = 1; y < this.size; y += 1) {
        for (let gridSize = 1; gridSize < this.size; gridSize += 1) {
          const res = this.getValue(x, y, gridSize);
          if (max < res) {
            max = res;
            coord = `${x},${y},${gridSize}`;
          }
        }
      }
    }

    return coord;
  }
}

export function getDay11(input: number) {
  const d11 = new Day11(301, input);
  return [d11.part1(3), d11.part2()]
}
