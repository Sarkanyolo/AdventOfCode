use crate::helpers;

const VOWELS: [char; 5] = ['a', 'e', 'i', 'o', 'u'];
const INVALIDS: [&str; 4] = ["ab", "cd", "pq", "xy"];

pub fn d05() {
    let mut count: u16 = 0;

    let lines = helpers::read_lines("input/05.txt");
    for line in lines {
        let l = line.as_str();
        if !is_invalid(l) && three_vowels(l) && double_letter(l) {
            count += 1;
        }
    }

    println!("{}", count);
}

fn three_vowels(str: &str) -> bool {
    let mut count: u8 = 0;
    for c in str.chars() {
        for v in VOWELS {
            if c == v {
                count += 1;
                if count > 2 {
                    return true;
                }
            }
        }
    }

    false
}

fn double_letter(str: &str) -> bool {
    let mut prev: char = ' ';
    for c in str.chars() {
        if c == prev {
            return true;
        }
        prev = c;
    }

    false
}

fn is_invalid(str: &str) -> bool {
    for invalid in INVALIDS {
        if str.contains(invalid) {
            return true;
        }
    }

    false
}
