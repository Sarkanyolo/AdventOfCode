pub mod day01;
pub mod day02;
pub mod day03;
pub mod day04;
pub mod day05;
pub mod day09;
pub mod helpers;

use std::env;

fn main() {
    env::set_var("RUST_BACKTRACE", "1");

    day01::d01();
    day02::d02();
    day03::d03();
    // day04::d04(); - Slow
    day05::d05();
}
