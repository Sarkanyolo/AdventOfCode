class Day6 {
  coords: number[][];
  constructor(input: string[]) {
    this.coords = [];

    for (let i = 0; i < input.length; i += 1) {
      const xy = input[i].split(', ');
      this.coords[i] = [+xy[0], +xy[1]];
    }
  }

  distance(x1: number, y1: number, x2: number, y2: number) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  getClosest(x: number, y: number) {
    let count = Number.MIN_SAFE_INTEGER;
    let dist = Number.MAX_SAFE_INTEGER;
    let selected = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < this.coords.length; i += 1) {
      const d = this.distance(x, y, this.coords[i][0], this.coords[i][1]);
      if (d === dist) {
        count += 1;
      } else if (d < dist) {
        selected = i;
        dist = d;
        count = 1;
      }
    }

    if (count > 1) return Number.MIN_SAFE_INTEGER;
    return selected;
  }

  getDistances(min: number, max: number) {
    const dict: { [key: number]: number } = {};

    for (let x = min; x < max; x += 1) {
      for (let y = min; y < max; y += 1) {
        const closest = this.getClosest(x, y);
        if (closest !== Number.MIN_SAFE_INTEGER) {
          if (dict[closest] === undefined) {
            dict[closest] = 1;
          } else {
            dict[closest] += 1;
          }
        }
      }
    }

    return dict;
  }

  part1() {
    const res = this.getDistances(0, 500);
    const res2 = this.getDistances(-10, 510);
    let max = -1;
    for (let i = 0; i < 50; i += 1) {
      if (res[i] === res2[i]) {
        if (res[i] > max) max = res[i];
      }
    }

    return max;
  }

  part2() {
    let inRegion = 0;

    for (let i = -500; i < 900; i += 1) {
      for (let j = -500; j < 900; j += 1) {
        let totalDist = 0;
        for (let p = 0; p < this.coords.length; p += 1) {
          totalDist += this.distance(this.coords[p][0], this.coords[p][1], i, j);
        }

        if (totalDist < 10000) inRegion += 1;
      }
    }

    return inRegion;
  }
}

export function getDay06(input: string[]) {
  const d6 = new Day6(input);
  return [d6.part1(), d6.part2()];
}
