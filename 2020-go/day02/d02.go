package day02

import (
	"fmt"
	"main/helpers"
	"strconv"
	"strings"
)

type password struct {
	min  int
	max  int
	char string
	pass string
}

func Solve() {
	lines := helpers.GetFileContent("day02/input.txt")
	pass := make([]password, 0, len(lines))

	for _, l := range lines {
		if len(l) > 0 {
			parts := strings.Split(l, " ")
			min, max := getMinMax(parts[0])
			pass = append(pass, password{min, max, string([]rune(parts[1])[0]), parts[2]})
		}
	}

	p1, p2 := 0, 0
	for _, p := range pass {
		if isValidOld(p) {
			p1 += 1
		}
		if isValid(p) {
			p2 += 1
		}
	}

	fmt.Println("Day02: ", p1, p2)
}

func getMinMax(str string) (min int, max int) {
	values := strings.Split(str, "-")
	min, _ = strconv.Atoi(values[0])
	max, _ = strconv.Atoi(values[1])
	return min, max
}

func isValidOld(pass password) bool {
	count := strings.Count(pass.pass, pass.char)
	return count >= pass.min && count <= pass.max
}

func isValid(pass password) bool {
	runepass := []rune(pass.pass)
	runechar := []rune(pass.char)[0]
	counter := 0
	if runepass[pass.min-1] == runechar {
		counter += 1
	}
	if runepass[pass.max-1] == runechar {
		counter += 1
	}

	return counter == 1
}
