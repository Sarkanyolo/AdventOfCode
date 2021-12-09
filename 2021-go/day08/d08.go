package day08

import (
	"aoc/helpers"
	"fmt"
	"strings"
)

var charmap map[rune]rune

func diff(a, b string) string {
	var res string
	br := []rune(b)
	for i := 0; i < len(br); i++ {
		if !strings.ContainsRune(a, br[i]) {
			res += string(br[i])
		}
	}
	return res
}

func mapString(s string) string {

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

	return -1
}

func p1() {
	for _, p := range helpers.Permutations("abcdefg") {

	}
}

func Solve() {
	data := helpers.GetFileContent("day08/i.txt")
	entries := strings.Fields(data[0])

	p1()

	//charmap := make(map[rune]rune, 0)

	fmt.Println("Day 8: ", entries[0], helpers.Permutations("abcdefg"))
}
