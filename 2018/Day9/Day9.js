class Day9 {
  constructor(players, marbles) {
    this.scores = {};
    this.currentPlayer = 1;
    this.marbles = [0];
    this.index = 0;
    this.playerCount = players;

    for (let i = 1; i <= marbles; i += 1) {
      if (i % 23 !== 0) {
        this.normalCase(i);
      } else {
        this.specialCase(i);
      }

      this.nextPlayer();
    }
  }

  nextPlayer() {
    this.currentPlayer += 1;
    if (this.currentPlayer > this.playerCount) this.currentPlayer = 1;
  }

  addPoints(point) {
    if (this.scores[this.currentPlayer] === undefined) {
      this.scores[this.currentPlayer] = point;
    } else {
      this.scores[this.currentPlayer] += point;
    }
  }

  clockwise(n) {
    let i = this.index;
    while (n-- > 0) {
      i += 1;
      if (i >= this.marbles.length) i = 0;
    }

    return i;
  }

  counterClockwise(n) {
    let i = this.index;
    while (n-- > 0) {
      i -= 1;
      if (i < 0) i = this.marbles.length - 1;
    }

    return i;
  }

  insert(pos, item) {
    if (pos === this.marbles.length) {
      this.marbles.push(item);
    } else {
      this.marbles.splice(pos + 1, 0, item);
    }
  }

  remove(pos) {
    this.marbles.splice(pos, 1);
  }

  normalCase(i) {
    const pos = this.clockwise(1);
    this.insert(pos, i);
    this.index = pos + 1;
  }

  specialCase(i) {
    const pos = this.counterClockwise(7);
    this.addPoints(i);
    this.addPoints(this.marbles[pos]);
    this.remove(pos);
    this.index = pos;
    if (this.index === this.marbles.length) this.index = 0;
  }

  getMax() {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= this.playerCount; i += 1) {
      const s = this.scores[i];
      if (s !== undefined && s > max) max = s;
    }

    return max;
  }
}

const playerCount = 418;
const marbleCount = 70769;
const d9 = new Day9(playerCount, marbleCount);
console.dir(d9.getMax());
