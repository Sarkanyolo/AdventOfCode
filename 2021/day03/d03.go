package day03

import (
	"aoc/helpers"
	"fmt"
	"strconv"
	"strings"
)

func power(data []string) int64 {
	gamma, epsilon := "", ""
	linelen := len(data[0])
	for i := 0; i < linelen; i++ {
		n0, n1 := 0, 0
		for line := 0; line < len(data); line++ {
			if data[line][i] == '0' {
				n0 += 1
			} else {
				n1 += 1
			}
		}
		if n0 > n1 {
			gamma += "0"
			epsilon += "1"
		} else {
			gamma += "1"
			epsilon += "0"
		}
	}

	g, _ := strconv.ParseInt(gamma, 2, 64)
	e, _ := strconv.ParseInt(epsilon, 2, 64)
	return g * e
}

func ofilter(n0, n1 int) string {
	if n1 >= n0 {
		return "1"
	}
	return "0"
}

func cofilter(n0, n1 int) string {
	if n0 <= n1 {
		return "0"
	}
	return "1"
}

func filterdata(data []string, filter func(int, int) string) int64 {
	linelen := len(data[0])
	datastr := ""
	for i := 0; i < linelen; i++ {
		n0, n1 := 0, 0
		for line := 0; line < len(data); line++ {
			if data[line][i] == '0' {
				n0 += 1
			} else {
				n1 += 1
			}
		}
		datastr += filter(n0, n1)

		// Delete not matching lines
		for line := len(data) - 1; line >= 0; line-- {
			if !strings.HasPrefix(data[line], datastr) {
				data[line] = data[len(data)-1]
				data = data[:len(data)-1]
			}
			if len(data) < 2 {
				value, _ := strconv.ParseInt(data[0], 2, 64)
				return value
			}
		}
	}

	return -1
}

func Solve() {
	data := helpers.GetFileContent("day03/input.txt")

	datacopy := make([]string, len(data))
	copy(datacopy, data)
	fmt.Println("Day 3: ", power(data), filterdata(data, ofilter)*filterdata(datacopy, cofilter))
}
