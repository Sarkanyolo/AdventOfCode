use std::path;
use std::fs;

pub fn read_file(fpath: &str) -> String {
    let file = path::Path::new(fpath);
    fs::read_to_string(&file).expect("Unable to read file")
}