package containers

import (
	"aoc/helpers"
	"strings"
)

type bingopairs struct {
	value  int
	marked bool
}

type Bingo struct {
	wins    bool
	numbers [5][5]bingopairs
}

func MakeBingo(values []string) Bingo {
	var b = Bingo{
		numbers: [5][5]bingopairs{},
	}
	for line := 0; line < 5; line++ {
		nums := strings.Fields(values[line])
		for i := 0; i < 5; i++ {
			b.numbers[line][i].value = helpers.ToInt(nums[i])
		}
	}
	return b
}

func (b *Bingo) Mark(number int) bool {
	for i := 0; i < 5; i++ {
		for j := 0; j < 5; j++ {
			if b.numbers[i][j].value == number {
				b.numbers[i][j].marked = true
			}
		}
	}

	return b.win()
}

func (b *Bingo) Value() int {
	value := 0
	for i := 0; i < 5; i++ {
		for j := 0; j < 5; j++ {
			if !b.numbers[i][j].marked {
				value += b.numbers[i][j].value
			}
		}
	}

	return value
}

func (b *Bingo) win() bool {
	for i := 0; i < 5; i++ {
		if (b.numbers[i][0].marked && b.numbers[i][1].marked && b.numbers[i][2].marked && b.numbers[i][3].marked && b.numbers[i][4].marked) ||
			(b.numbers[0][i].marked && b.numbers[1][i].marked && b.numbers[2][i].marked && b.numbers[3][i].marked && b.numbers[4][i].marked) {
			b.wins = true
			return true
		}
	}
	return false
}
