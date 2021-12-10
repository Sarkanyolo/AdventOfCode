package main

import (
	"fmt"
	"main/day01"
	"main/day02"
	"main/day03"
	"time"
)

func main() {
	start := time.Now()

	day01.Solve()
	day02.Solve()
	day03.Solve()

	elapsed := time.Since(start)
	fmt.Println(elapsed)
}
