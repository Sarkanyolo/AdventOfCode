package main

import (
	"aoc/containers"
	"aoc/helpers"
	"fmt"
	"strconv"
	"strings"
)

func parseinput(s string) containers.Vec {
	s = strings.Replace(s, " -> ", ",", 1)
	n := strings.Split(s, ",")
	x1, _ := strconv.Atoi(n[0])
	y1, _ := strconv.Atoi(n[1])
	x2, _ := strconv.Atoi(n[2])
	y2, _ := strconv.Atoi(n[3])

	return containers.Vec{
		C1: containers.Coord{
			X: x1,
			Y: y1,
		},
		C2: containers.Coord{
			X: x2,
			Y: y2,
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

func day5() {
	data := helpers.GetFileContent("input/day05.txt")
	vecs := make([]containers.Vec, 0)

	for line := 0; line < len(data); line++ {
		vecs = append(vecs, parseinput(data[line]))
	}

	field := [1000][1000]int{}

	for v := 0; v < len(vecs); v++ {
		coords := vecs[v].GetLines()
		for i := 0; i < len(coords); i++ {
			field[coords[i].Y][coords[i].X] += 1
		}
	}

	p1 := getOverlaps(field)

	for v := 0; v < len(vecs); v++ {
		coords := vecs[v].GetDiagonals()
		for i := 0; i < len(coords); i++ {
			field[coords[i].Y][coords[i].X] += 1
		}
	}

	fmt.Println("Day 5: ", p1, getOverlaps(field))
}
