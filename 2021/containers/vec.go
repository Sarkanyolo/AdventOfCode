package containers

import (
	"aoc/helpers"
)

type Vec struct {
	C1, C2 Coord
}

func (v *Vec) GetLines() []Coord {
	x1 := helpers.Min(v.C1.X, v.C2.X)
	x2 := helpers.Max(v.C1.X, v.C2.X)
	y1 := helpers.Min(v.C1.Y, v.C2.Y)
	y2 := helpers.Max(v.C1.Y, v.C2.Y)

	coords := make([]Coord, 0)

	if x1 == x2 {
		for i := y1; i <= y2; i++ {
			coords = append(coords, Coord{X: x1, Y: i})
		}
	}
	if y1 == y2 {
		for i := x1; i <= x2; i++ {
			coords = append(coords, Coord{X: i, Y: y1})
		}
	}

	return coords
}

func (v *Vec) GetDiagonals() []Coord {
	coords := make([]Coord, 0)
	if v.C1.X != v.C2.X && v.C1.Y != v.C2.Y {

		x := v.C1.X
		y := v.C1.Y
		coords = append(coords, Coord{X: x, Y: y})
		for {
			if v.C2.X > x {
				x += 1
			} else {
				x -= 1
			}

			if v.C2.Y > y {
				y += 1
			} else {
				y -= 1
			}

			coords = append(coords, Coord{X: x, Y: y})
			if x == v.C2.X {
				return coords
			}
		}
	}

	return coords
}
