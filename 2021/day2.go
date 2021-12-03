package main

import (
	"aoc/helpers"
	"fmt"
	"strconv"
	"strings"
)

func day2() {
	data := helpers.GetFileContent("input/day2.txt")
	depth, forward := 0, 0

	for i := 0; i < len(data); i++ {
		parts := strings.Fields(data[i])
		value, _ := strconv.Atoi(parts[1])

		if strings.HasPrefix(parts[0], "f") {
			forward += value
		} else if strings.HasPrefix(parts[0], "d") {
			depth += value
		} else {
			depth -= value
		}
	}

	fmt.Println("Day 2 Part 1: ", depth*forward)
}
