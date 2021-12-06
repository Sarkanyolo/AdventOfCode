package day02

import (
	"aoc/helpers"
	"fmt"
	"strconv"
	"strings"
)

func Solve() {
	data := helpers.GetFileContent("day02/input.txt")
	depth, forward := 0, 0
	d2, f2, aim := 0, 0, 0

	for i := 0; i < len(data); i++ {
		parts := strings.Fields(data[i])
		value, _ := strconv.Atoi(parts[1])

		if strings.HasPrefix(parts[0], "f") {
			forward += value
			f2 += value
			d2 += aim * value
		} else if strings.HasPrefix(parts[0], "d") {
			depth += value
			aim += value
		} else {
			depth -= value
			aim -= value
		}
	}

	fmt.Println("Day 2: ", depth*forward, d2*f2)
}
