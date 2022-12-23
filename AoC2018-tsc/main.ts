import fs from 'fs';
import { getDay02 } from "./Day2/day02"
import { getDay03 } from './Day3/day03';

function getFile(path: string) {
    return fs.readFileSync(path, 'utf8').split('\r\n');
}

const day02 = getDay02(getFile("input/02.txt"));
console.info(`Day02 - Part1: ${day02[0]}, Part2: ${day02[1]}`);

const day03 = getDay03(getFile("input/03.txt"));
console.info(`Day03 - Part1: ${day03[0]}, Part2: ${day03[1]}`);