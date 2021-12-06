package day05

import (
	"aoc/helpers"
	"fmt"
	"strconv"
	"strings"
)

func parseinput(s string) vec {
	s = strings.Replace(s, " -> ", ",", 1)
	n := strings.Split(s, ",")
	x1, _ := strconv.Atoi(n[0])
	y1, _ := strconv.Atoi(n[1])
	x2, _ := strconv.Atoi(n[2])
	y2, _ := strconv.Atoi(n[3])

	return vec{
		c1: coord{
			x: x1,
			y: y1,
		},
		c2: coord{
			x: x2,
			y: y2,
		},
	}
}

func getOverlaps(field [1000][1000]int) int {
	overlap := 0
	for i := 0; i < 1000; i++ {
		for j := 0; j < 1000; j++ {
			if field[i][j] > 1 {
				overlap += 1
			}
		}
	}
	return overlap
}

func Solve() {
	data := helpers.GetFileContent("day05/input.txt")
	vecs := make([]vec, 0)

	for line := 0; line < len(data); line++ {
		vecs = append(vecs, parseinput(data[line]))
	}

	field := [1000][1000]int{}

	for v := 0; v < len(vecs); v++ {
		coords := vecs[v].GetLines()
		for i := 0; i < len(coords); i++ {
			field[coords[i].y][coords[i].x] += 1
		}
	}

	p1 := getOverlaps(field)

	for v := 0; v < len(vecs); v++ {
		coords := vecs[v].GetDiagonals()
		for i := 0; i < len(coords); i++ {
			field[coords[i].y][coords[i].x] += 1
		}
	}

	fmt.Println("Day 5: ", p1, getOverlaps(field))
}
