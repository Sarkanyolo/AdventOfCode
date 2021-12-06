package main

import (
	"fmt"
	"main/day01"
	"main/day02"
	"time"
)

func main() {
	start := time.Now()

	day01.Solve()
	day02.Solve()

	elapsed := time.Since(start)
	fmt.Println(elapsed)
}
