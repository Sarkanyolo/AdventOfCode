package day14

import (
	"aoc/helpers"
	"fmt"
	"math"
)

var imap map[string]string

func getSequence(s string) string {
	if val, ok := imap[s]; ok {
		return val
	}

	return s
}

func step(polimer string) string {
	p2 := ""
	for i := len(polimer) - 2; i >= 0; i-- {
		p2 = getSequence(polimer[i:i+2]) + p2
	}
	return p2 + string(polimer[len(polimer)-1])
}

func leastAndMostCommon(s string) (least, most uint64) {
	freq := make(map[byte]uint64, 0)
	for i := 0; i < len(s); i++ {
		freq[s[i]] += 1
	}

	var min, max uint64
	min, max = math.MaxUint64, 0
	for _, v := range freq {
		if v > max {
			max = v
		}
		if v < min {
			min = v
		}
	}

	return min, max
}

func Solve() {
	data := helpers.GetFileContent("day14/input.txt")
	polimer := data[0]

	imap = make(map[string]string, 0)
	for i := 2; i < len(data); i++ {
		imap[string(data[i][:2])] = string(data[i][0]) + string(data[i][6])
	}

	for i := 0; i < 40; i++ {
		fmt.Println("Step ", i)
		polimer = step(polimer)
	}

	least, most := leastAndMostCommon(polimer)

	fmt.Println("Day 14: ", most-least)
}
