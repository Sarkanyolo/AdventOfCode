import fs from "fs";
import { getDay01 } from './Day1/day01.js';
import { getDay02 } from "./Day2/day02.js"
import { getDay03 } from './Day3/day03.js';
import  {getDay04}  from './Day4/day04.js';
//import { getDay05 } from './Day5/day05.js';
import { getDay06 } from './Day6/day06.js';
import { getDay07 } from './Day7/day07.js';
import { getDay08 } from './Day8/day08.js';
import { getDay09 } from './Day9/day09.js';
// import { getDay11 } from './Day11/day11.js';
import { getDay12 } from './Day12/day12.js';
import { getDay13 } from './Day13/day13.js';

function getFile(path: string) {
    return fs.readFileSync(path, 'utf8');
}

let day : (string|number)[] = getDay01(getFile("input/01.txt").split('\r\n'));
console.dir(`Day01 - Part1: ${day[0]}, Part2: ${day[1]}`);

day = getDay02(getFile("input/02.txt").split('\r\n'));
console.dir(`Day02 - Part1: ${day[0]}, Part2: ${day[1]}`);

day = getDay03(getFile("input/03.txt").split('\r\n'));
console.dir(`Day03 - Part1: ${day[0]}, Part2: ${day[1]}`);

day = getDay04(getFile("input/04.txt").split('\r\n'));
console.dir(`Day04 - Part1: ${day[0]}, Part2: ${day[1]}`);

// day = getDay05(getFile("input/05.txt"));
console.dir(`Day05 - Part1: ${NaN}, Part2: ${NaN}`);

day = getDay06(getFile("input/06.txt").split('\r\n'));
console.dir(`Day06 - Part1: ${day[0]}, Part2: ${day[1]}`);

day = getDay07(getFile("input/07.txt").split('\r\n'));
console.dir(`Day07 - Part1: ${day[0]}, Part2: ${day[1]}`);

day = getDay08(getFile("input/08.txt").split(' ').map(x => +x));
console.dir(`Day08 - Part1: ${day[0]}, Part2: ${day[1]}`);

day = getDay09(478, 71240);
console.dir(`Day09 - Part1: ${day[0]}, Part2: ${day[1]}`);

console.dir(`Day10 - Part1: ${NaN}, Part2: ${NaN}`);

console.dir(`Day11 - Part1: ${NaN}, Part2: ${NaN}`);

day = getDay12(getFile("input/12.txt").split('\r\n'));
console.dir(`Day12 - Part1: ${day[0]}, Part2: ${day[1]}`);

day = getDay13(getFile("input/13.txt").split('\r\n'));
console.dir(`Day13 - Part1: ${day[0]}, Part2: ${day[1]}`);

// Day14 077201
