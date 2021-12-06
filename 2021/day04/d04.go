package day04

import (
	"aoc/helpers"
	"fmt"
	"strings"
)

func Solve() {
	data := helpers.GetFileContent("day04/input.txt")
	numbers := helpers.StringsToInts(strings.Split(data[0], ","))

	// Holds the bingos that didn't win yet for Part2
	ingame := make(map[int]bool)

	// Holds the bingo tables
	bingos := make([]Bingo, 0)
	for i := 0; i < ((len(data) - 1) / 6); i++ {
		bingos = append(bingos, MakeBingo(data[i*6+2:i*6+7]))
		ingame[i] = true
	}

	first := 0

	for n := 0; len(ingame) > 0 && n < len(numbers); n++ {
		for b := 0; b < len(bingos); b++ {
			if _, ok := ingame[b]; ok {
				if bingos[b].Mark(numbers[n]) {
					if first == 0 {
						first = numbers[n] * bingos[b].Value()
					}
					if len(ingame) < 2 {
						fmt.Println("Day 4: ", first, numbers[n]*bingos[b].Value())
					}
					delete(ingame, b)
				}
			}
		}
	}
}
