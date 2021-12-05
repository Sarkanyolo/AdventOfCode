package main

import (
	"aoc/helpers"
	"fmt"
)

func day1() {
	counter := 0

	h := helpers.GetFileContentAsInt("input/day01.txt")
	for i := 1; i < len(h); i++ {
		if h[i] > h[i-1] {
			counter += 1
		}
	}

	counter2 := 0
	for i := 3; i < len(h); i++ {
		if (h[i] + h[i-1] + h[i-2]) > (h[i-1] + h[i-2] + h[i-3]) {
			counter2 += 1
		}
	}

	fmt.Println("Day 1: ", counter, counter2)
}
