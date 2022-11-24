pub fn d04() {
    let input = "bgvyzdsv".to_string();

    let mut i: u32 = 0;
    let mut p1: u32 = 0;
    loop {
        i += 1;
        let mut s = input.clone();
        s.push_str(i.to_string().as_str());
        let digest = md5::compute(s);

        let digest_str = format!("{:x}", digest);
        if p1 == 0 && digest_str.starts_with("00000") {
            p1 = i;
        }
        if digest_str.starts_with("000000") {
            println!("2015 Day 04: {} {}", p1, i);
            break;
        }
    }
}
