package day03

import (
	"fmt"
	"main/helpers"
)

func Solve() {
	lines := helpers.GetFileContent("day03/i.txt")
	trees := make([][]bool, 0)

	for _, l := range lines {
		tl := make([]bool, 0)
		for _, c := range l {
			if c == '#' {
				tl = append(tl, true)
			} else {
				tl = append(tl, false)
			}
		}
		trees = append(trees, tl)
	}

	x, p1, p2 := 0, 0, 0
	for i := 0; i < len(trees); i++ {
		if trees[x][i] {
			p1 += 1
		}
		x += 3
		if x >= len(trees[0]) {
			x -= len(trees[0])
		}
	}

	fmt.Println("Day03: ", p1, p2, trees)
}
