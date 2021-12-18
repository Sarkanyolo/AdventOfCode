use crate::helpers;

pub fn d01() {
    let s = helpers::read_file("input/01.txt");

    let mut floor = 0;
    let mut counter = 0;
    let mut part2 = 0;
    for c in s.chars() {
        counter += 1;
        if c == '(' {
            floor += 1;
        } else if c == ')' {
            floor -= 1;
            if part2 < 1 && floor < 0 {
                part2 = counter;
            }
        }
    }

    println!("2015 Day01: {} {}", floor, part2);
}