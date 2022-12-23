import { getKeys } from "../helpers";

const minuteInMS = 60000;

class Day4 {
  summary: { [key: number]: number };
  minutesByGuard: { [key: number]: number[] };
  activeGuard: number;
  lastFallSleepTime: number;
  constructor(text: string[]) {
    this.summary = {};
    this.minutesByGuard = {};
    this.activeGuard = 0;
    this.lastFallSleepTime = 0;

    text = text.sort();

    for (let i = 0; i < text.length; i += 1) {
      const input = text[i].replace('[', '').split('] ');
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

  fillTimeTable(time: number) {
    for (let i = this.lastFallSleepTime; i < time; i += minuteInMS) {
      this.minutesByGuard[this.activeGuard][new Date(i).getMinutes()] += 1;
    }
  }

  wakeUp(time: number) {
    const val = ((+time) - this.lastFallSleepTime) / minuteInMS;

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
    const guardid = getKeys(this.summary).reduce((a, b) => (this.summary[a] > this.summary[b] ? a : b));
    const max = this.minutesByGuard[guardid].indexOf(Math.max(...this.minutesByGuard[guardid]));
    return guardid * max;
  }

  Part2() {
    let maxIndex = -1;
    let maxValue = -1;
    let guardId = -1;

    getKeys(this.summary).forEach((g) => {
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

export function getDay04(input: string[]) {
  const d4 = new Day4(input);
  return [d4.Part1(), d4.Part2()];
}
