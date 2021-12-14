package day14

import (
	"aoc/helpers"
	"fmt"
)

func Solve() {
	data := helpers.GetFileContent("day14/i.txt")
	polimer := data[0]

	imap := make(map[string]string, 0)
	for i := 2; i < len(data); i++ {
		imap[string(data[i][:2])] = string(data[i][6])
	}

	fmt.Println("Day 14: ", polimer, imap)
}
