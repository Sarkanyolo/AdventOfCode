use std::cmp;

use crate::helpers;

fn part1(w: i64, h: i64, l: i64) -> i64 {
    let min = cmp::min(cmp::min(l * w, w * h), h * l);
    2 * l * w + 2 * w * h + 2 * h * l + min
}

fn part2(w: i64, h: i64, l: i64) -> i64 {
    let max = cmp::max(cmp::max(l, w), h);
    let ribbon = w * 2 + h * 2 + l * 2 - max * 2;
    let bow = w * h * l;
    ribbon + bow
}

pub fn d02() {
    let lines = helpers::read_lines("input/02.txt");
    let mut p1: i64 = 0;
    let mut p2: i64 = 0;
    for line in lines {
        let values: Vec<String> = line.split('x').map(|s| s.to_string()).collect();

        let w = values[0].parse::<i64>().unwrap();
        let h = values[1].parse::<i64>().unwrap();
        let l = values[2].parse::<i64>().unwrap();

        p1 += part1(w, h, l);
        p2 += part2(w, h, l);
    }

    println!("2015 Day02: {} {}", p1, p2);
}
