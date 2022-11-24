use std::fs::File;
use std::io::BufRead;
use std::io::BufReader;

pub fn read_lines(fpath: &str) -> Vec<String> {
    let file = BufReader::new(File::open(fpath).unwrap());
    file.lines().map(|x| x.unwrap()).collect::<Vec<String>>()
}
