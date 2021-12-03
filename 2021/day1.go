package main

import (
	"aoc/helpers"
	"fmt"
)

func day1() {
	h := helpers.GetFileContentAsInt("input/day1.txt")
	counter := 0

	for i := 1; i < len(h); i++ {
		if h[i] > h[i-1] {
			counter += 1
		}
	}

	fmt.Println("Day 1 Part 1: ", counter)

	counter = 0

	for i := 3; i < len(h); i++ {
		if (h[i] + h[i-1] + h[i-2]) > (h[i-1] + h[i-2] + h[i-3]) {
			counter += 1
		}
	}

	fmt.Println("Day 1 Part 2: ", counter)
}
