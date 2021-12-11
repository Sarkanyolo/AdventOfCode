package day08

import (
	"aoc/helpers"
	"fmt"
	"strings"
)

var charmap map[rune]string

func mapString(s string) string {
	var result string
	for _, c := range s {
		result += charmap[c]
	}

	return result
}

func c(s string, r rune) bool {
	return strings.ContainsRune(s, r)
}

func identify(s string) int {
	switch len(s) {
	case 2:
		if c(s, 'c') && c(s, 'f') {
			return 1
		}

	case 3:
		if c(s, 'a') && c(s, 'c') && c(s, 'f') {
			return 7
		}

	case 4:
		if c(s, 'b') && c(s, 'c') && c(s, 'd') && c(s, 'f') {
			return 4
		}

	case 5:
		if c(s, 'a') && c(s, 'c') && c(s, 'd') && c(s, 'e') && c(s, 'g') {
			return 2
		} else if c(s, 'a') && c(s, 'c') && c(s, 'd') && c(s, 'f') && c(s, 'g') {
			return 3
		} else if c(s, 'a') && c(s, 'b') && c(s, 'd') && c(s, 'f') && c(s, 'g') {
			return 5
		}
	case 6:
		if c(s, 'a') && c(s, 'b') && c(s, 'c') && c(s, 'e') && c(s, 'f') && c(s, 'g') {
			return 0
		} else if c(s, 'a') && c(s, 'b') && c(s, 'd') && c(s, 'e') && c(s, 'f') && c(s, 'g') {
			return 6
		} else if c(s, 'a') && c(s, 'b') && c(s, 'c') && c(s, 'd') && c(s, 'f') && c(s, 'g') {
			return 9
		}
	default:
		return 8
	}

	// Identification error - Wrong mapping
	return -1
}

func getEntries(entries []string) []int {
	for _, p := range helpers.Permutations("abcdefg") {
		charmap['b'] = string(p[1])
		charmap['c'] = string(p[2])
		charmap['d'] = string(p[3])
		charmap['a'] = string(p[0])
		charmap['e'] = string(p[4])
		charmap['f'] = string(p[5])
		charmap['g'] = string(p[6])

		var incorrect bool
		for _, word := range entries {
			if len(word) > 1 {
				mappedWord := mapString(word)
				if identify(mappedWord) < 0 {
					incorrect = true
				}
			}
		}

		if incorrect {
			continue
		}

		// Return the identified value for the last 4 digits
		result := make([]int, 0)
		for _, word := range entries[len(entries)-4:] {
			if len(word) > 1 {
				mappedWord := mapString(word)
				result = append(result, identify(mappedWord))
			}
		}

		return result
	}

	return nil
}

func count1478(nums []int) int {
	var count int
	for _, n := range nums {
		if n == 1 || n == 4 || n == 7 || n == 8 {
			count += 1
		}
	}

	return count
}

func createNumber(n []int) int {
	return n[0]*1000 +
		n[1]*100 +
		n[2]*10 +
		n[3]
}

func Solve() {
	// Create a map for the characters
	charmap = make(map[rune]string, 0)
	// Handle separator
	charmap['|'] = ""

	data := helpers.GetFileContent("day08/input.txt")
	part1, part2 := 0, 0
	for _, row := range data {
		res := getEntries(strings.Fields(row))
		part1 += count1478(res[len(res)-4:])
		part2 += createNumber(res[len(res)-4:])
	}

	fmt.Println("Day 8: ", part1, part2)
}
