package day05

import (
	"aoc/helpers"
)

type coord struct {
	x, y int
}

type vec struct {
	c1, c2 coord
}

func (v *vec) GetLines() []coord {
	x1 := helpers.Min(v.c1.x, v.c2.x)
	x2 := helpers.Max(v.c1.x, v.c2.x)
	y1 := helpers.Min(v.c1.y, v.c2.y)
	y2 := helpers.Max(v.c1.y, v.c2.y)

	coords := make([]coord, 0)

	if x1 == x2 {
		for i := y1; i <= y2; i++ {
			coords = append(coords, coord{x: x1, y: i})
		}
	}
	if y1 == y2 {
		for i := x1; i <= x2; i++ {
			coords = append(coords, coord{x: i, y: y1})
		}
	}

	return coords
}

func (v *vec) GetDiagonals() []coord {
	coords := make([]coord, 0)
	if v.c1.x != v.c2.x && v.c1.y != v.c2.y {

		x := v.c1.x
		y := v.c1.y
		coords = append(coords, coord{x: x, y: y})
		for {
			if v.c2.x > x {
				x += 1
			} else {
				x -= 1
			}

			if v.c2.y > y {
				y += 1
			} else {
				y -= 1
			}

			coords = append(coords, coord{x: x, y: y})
			if x == v.c2.x {
				return coords
			}
		}
	}

	return coords
}
