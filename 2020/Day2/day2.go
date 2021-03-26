package main

import (
	"fmt"
	"io/ioutil"
	"strconv"
	"strings"
)

type password struct {
	min  int
	max  int
	char string
	pass string
}

func main() {
	pass := readFile("D:\\1.txt")

	// First
	counter := 0
	for _, p := range pass {
		if isValidOld(p) {
			counter += 1
		}
	}

	fmt.Println(counter)

	// Second
	counter = 0
	for _, p := range pass {
		if isValid(p) {
			counter += 1
		}
	}

	fmt.Println(counter)
}

func readFile(fname string) (passwords []password) {
	b, err := ioutil.ReadFile(fname)
	if err != nil {
		return nil
	}

	lines := strings.Split(string(b), "\n")
	passwords = make([]password, 0, len(lines))

	for _, l := range lines {
		if len(l) > 0 {
			parts := strings.Split(l, " ")
			min, max := getMinMax(parts[0])
			passwords = append(passwords, password{min, max, string([]rune(parts[1])[0]), parts[2]})
		}
	}

	return passwords
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
