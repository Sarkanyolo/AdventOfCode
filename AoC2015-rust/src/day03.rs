use std::collections::HashMap;

use crate::helpers;

pub fn d03() {
    let mut hm_p1 = HashMap::new();
    hm_p1.insert("0:0".to_string(), 1);

    let mut hm_p2 = HashMap::new();
    hm_p2.insert("0:0".to_string(), 2);

    let mut p1_x = 0;
    let mut p1_y = 0;
    let mut p2_x1 = 0;
    let mut p2_y1 = 0;
    let mut p2_x2 = 0;
    let mut p2_y2 = 0;
    let mut is_robot = true;

    let lines = helpers::read_lines("input/03.txt");
    for c in lines[0].chars() {
        is_robot = !is_robot;
        if c == '^' {
            p1_y += 1;
            if is_robot {
                p2_y2 += 1
            } else {
                p2_y1 += 1
            }
        } else if c == '<' {
            p1_x -= 1;
            if is_robot {
                p2_x2 -= 1
            } else {
                p2_x1 -= 1
            }
        } else if c == '>' {
            p1_x += 1;
            if is_robot {
                p2_x2 += 1
            } else {
                p2_x1 += 1
            }
        } else if c == 'v' {
            p1_y -= 1;
            if is_robot {
                p2_y2 -= 1
            } else {
                p2_y1 -= 1
            }
        }

        let tupli = format!("{}:{}", p1_x, p1_y).to_owned();
        if hm_p1.contains_key(&tupli) {
            let val = hm_p1[&tupli] + 1;
            hm_p1.insert(tupli, val);
        } else {
            hm_p1.insert(tupli, 1);
        }

        let tupli2: String = if is_robot {
            format!("{}:{}", p2_x2, p2_y2).to_owned()
        } else {
            format!("{}:{}", p2_x1, p2_y1).to_owned()
        };

        if hm_p2.contains_key(&tupli2) {
            let val = hm_p2[&tupli2] + 1;
            hm_p2.insert(tupli2, val);
        } else {
            hm_p2.insert(tupli2, 1);
        }
    }

    println!(
        "2015 Day 03: {} {}",
        hm_p1.values().count(),
        hm_p2.values().count()
    );
}
