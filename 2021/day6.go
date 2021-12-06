package main

import (
	"aoc/helpers"
	"fmt"
	"strings"
)

func getSum(m map[int8]uint64) uint64 {
	var sum uint64
	for i := int8(0); i < 8; i++ {
		sum += m[i]
	}
	return sum
}

func day6() {
	data := helpers.GetFileContent("input/day06.txt")
	nums := helpers.StringsToInts(strings.Split(data[0], ","))

	lantern := make(map[int8]uint64)
	for i := 0; i < len(nums); i++ {
		lantern[int8(nums[i])] += 1
	}

	var part1 uint64

	for day := 0; day <= 256; day++ {
		lantern[9] = lantern[0]
		lantern[7] += lantern[0]
		for i := int8(0); i < 10; i++ {
			lantern[i] = lantern[i+1]
		}

		if day == 80 {
			part1 = getSum(lantern)
		}
	}

	fmt.Println("Day 6: ", part1, getSum(lantern))
}
