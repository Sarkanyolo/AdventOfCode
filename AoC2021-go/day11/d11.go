package day11

import (
	"aoc/helpers"
	"fmt"
	"strconv"
)

const (
	rows  = 10
	lines = 10
)

type octopus struct {
	val     int
	flashed bool
}

type coord struct {
	x, y int
}

var grid [rows][lines]octopus

func fill(data []string) {
	grid = [rows][lines]octopus{}
	for row := 0; row < rows; row++ {
		for n := 0; n < lines; n++ {
			grid[row][n].val, _ = strconv.Atoi(string(data[row][n]))
		}
	}
}

func getNeighbours(x, y int) []coord {
	c := make([]coord, 0)

	for xd := x - 1; xd <= x+1; xd++ {
		for yd := y - 1; yd <= y+1; yd++ {
			if xd == x && yd == y {
				continue
			}
			if xd >= 0 && yd >= 0 && xd < rows && yd < lines {
				c = append(c, coord{
					x: xd,
					y: yd,
				})
			}
		}
	}

	return c
}

func Flash() int {
	count := 0
	neighbours := make([]coord, 0)
	for x := 0; x < rows; x++ {
		for y := 0; y < lines; y++ {
			if grid[x][y].val > 9 && !grid[x][y].flashed {
				grid[x][y].flashed = true
				count += 1
				neighbours = append(neighbours, getNeighbours(x, y)...)
			}
		}
	}

	if count == 0 {
		return 0
	}

	// Increase neighbours
	for _, c := range neighbours {
		grid[c.x][c.y].val += 1
	}

	return count + Flash()
}

func Step() int {
	// Increase counter
	for x := 0; x < rows; x++ {
		for y := 0; y < lines; y++ {
			grid[x][y].val += 1
		}
	}

	// Check flashes
	flashes := Flash()

	// Null flashed ones
	for x := 0; x < rows; x++ {
		for y := 0; y < lines; y++ {
			if grid[x][y].flashed {
				grid[x][y].flashed = false
				grid[x][y].val = 0
			}
		}
	}

	return flashes
}

func Solve() {
	data := helpers.GetFileContent("day11/input.txt")
	fill(data)

	part1 := 0
	for i := 0; i < 100; i++ {
		part1 += Step()
	}

	var part2 int
	for i := 1; i < 99999; i++ {
		if Step() == rows*lines {
			part2 = i + 100
			break
		}
	}

	fmt.Println("Day 11: ", part1, part2)
}
