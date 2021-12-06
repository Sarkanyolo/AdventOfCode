package main

import (
	"fmt"
	"time"
)

func main() {
	start := time.Now()

	day1()
	day2()
	day3()
	day4()
	day5()
	day6()
	day7()

	elapsed := time.Since(start)
	fmt.Println(elapsed)
}
