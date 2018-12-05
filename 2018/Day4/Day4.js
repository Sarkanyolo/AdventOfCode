const fs = require('fs');

class Day4 {
  constructor(text) {
    this.text = text;
    this.summary = {};
    this.minutesByGuard = {};
    this.activeGuard = 0;
    this.lastFallSleepTime = 0;
    this.minuteInMS = 60000;

    for (let i = 0; i < this.text.length; i += 1) {
      const input = this.text[i].replace('[', '').split('] ');
      const datetime = Date.parse(input[0]);
      const instruction = input[1];

      if (instruction === 'wakes up') {
        this.wakeUp(datetime);
      } else if (instruction === 'falls asleep') {
        this.lastFallSleepTime = +datetime;
      } else {
        const guardId = instruction.split('#')[1].split(' ')[0];
        this.activeGuard = +guardId;
      }
    }
  }

  fillTimeTable(time) {
    for (let i = this.lastFallSleepTime; i < time; i += this.minuteInMS) {
      this.minutesByGuard[this.activeGuard][new Date(i).getMinutes()] += 1;
    }
  }

  wakeUp(time) {
    const val = ((+time) - this.lastFallSleepTime) / this.minuteInMS;

    // create entry for new guard; fill entry for existing guards
    if (this.summary[this.activeGuard] === undefined) {
      this.summary[this.activeGuard] = val;
      this.minutesByGuard[this.activeGuard] = new Array(60).fill(0);
    } else {
      this.summary[this.activeGuard] += val;
    }

    this.fillTimeTable(time);
  }

  Part1() {
    const guardid = Object.keys(this.summary).reduce((a, b) => (this.summary[a] > this.summary[b] ? a : b));
    const max = this.minutesByGuard[guardid].indexOf(Math.max(...this.minutesByGuard[guardid]));
    return guardid * max;
  }

  Part2() {
    let maxIndex = -1;
    let maxValue = -1;
    let guardId = -1;

    Object.keys(this.summary).forEach((g) => {
      const localMax = Math.max(...this.minutesByGuard[g]);
      if (localMax > maxValue) {
        guardId = g;
        maxValue = localMax;
        maxIndex = this.minutesByGuard[g].indexOf(localMax);
      }
    });

    return guardId * maxIndex;
  }
}

const text = fs.readFileSync('D:\\i.txt', 'utf8').split('\r\n');
const d4 = new Day4(text);
console.log('Part1: ', d4.Part1());
console.log('Part2: ', d4.Part2());
