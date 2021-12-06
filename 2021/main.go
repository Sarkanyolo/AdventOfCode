package main

import (
	"aoc/day01"
	"aoc/day02"
	"aoc/day03"
	"aoc/day04"
	"aoc/day05"
	"aoc/day06"
	"aoc/day07"
	"fmt"
	"time"
)

func main() {
	start := time.Now()

	day01.Solve()
	day02.Solve()
	day03.Solve()
	day04.Solve()
	day05.Solve()
	day06.Solve()
	day07.Solve()

	elapsed := time.Since(start)
	fmt.Println(elapsed)
}
