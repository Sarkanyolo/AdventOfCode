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

	elapsed := time.Since(start)
	fmt.Println(elapsed)
}
