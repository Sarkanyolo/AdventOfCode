import fs from 'fs';
import { getDay01 } from './Day1/day01';
import { getDay02 } from "./Day2/day02"
import { getDay03 } from './Day3/day03';
import { getDay04 } from './Day4/day04';
import { getDay05 } from './Day5/day05';
import { getDay06 } from './Day6/day06';
import { getDay08 } from './Day8/day08';
import { getDay09 } from './Day9/day09';
// import { getDay11 } from './Day11/day11';
import { getDay12 } from './Day12/day12';
import { getDay13 } from './Day13/day13';

function getFile(path: string) {
    return fs.readFileSync(path, 'utf8');
}

const day01 = getDay01(getFile("input/01.txt").split('\r\n'));
console.dir(`Day01 - Part1: ${day01[0]}, Part2: ${day01[1]}`);

const day02 = getDay02(getFile("input/02.txt").split('\r\n'));
console.dir(`Day02 - Part1: ${day02[0]}, Part2: ${day02[1]}`);

const day03 = getDay03(getFile("input/03.txt").split('\r\n'));
console.dir(`Day03 - Part1: ${day03[0]}, Part2: ${day03[1]}`);

const day04 = getDay04(getFile("input/04.txt").split('\r\n'));
console.dir(`Day04 - Part1: ${day04[0]}, Part2: ${day04[1]}`);

const day05 = getDay05(getFile("input/05.txt"));
console.dir(`Day05 - Part1: ${day05[0]}, Part2: ${day05[1]}`);

const day06 = getDay06(getFile("input/06.txt").split('\r\n'));
console.dir(`Day06 - Part1: ${day06[0]}, Part2: ${day06[1]}`);

console.dir(`Day08 - Part1: ${NaN}, Part2: ${NaN}`);

const day08 = getDay08(getFile("input/08.txt").split(' ').map(x => +x));
console.dir(`Day08 - Part1: ${day08[0]}, Part2: ${day08[1]}`);

const day09 = getDay09(478, 71240);
console.dir(`Day09 - Part1: ${day09[0]}, Part2: ${day09[1]}`);

console.dir(`Day10 - Part1: ${NaN}, Part2: ${NaN}`);

console.dir(`Day11 - Part1: ${NaN}, Part2: ${NaN}`);

const day12 = getDay12(getFile("input/12.txt").split('\r\n'));
console.dir(`Day12 - Part1: ${day12[0]}, Part2: ${day12[1]}`);

const day13 = getDay13(getFile("input/13.txt").split('\r\n'));
console.dir(`Day13 - Part1: ${day13[0]}, Part2: ${day13[1]}`);

// Day14 077201
