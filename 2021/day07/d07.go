package day07

import (
	"aoc/helpers"
	"fmt"
	"math"
	"strings"
)

func fuel(nums map[int]int, n int) int {
	var sum int
	for k, v := range nums {
		sum += int(math.Abs(float64(k-n))) * v
	}
	return sum
}

func fuel2(nums, h map[int]int, n int) int {
	var sum int
	for k, v := range nums {
		sum += h[int(math.Abs(float64(k-n)))] * v
	}
	return sum
}

func generateFuel2() map[int]int {
	f := make(map[int]int, 0)
	prev, current := 0, 0
	for i := 0; i < 1500; i++ {
		current = prev + i
		prev = current
		f[i] = current
	}
	return f
}

func Solve() {
	data := helpers.GetFileContent("day07/input.txt")
	numdata := helpers.StringsToInts(strings.Split(data[0], ","))

	nums := make(map[int]int, 0)
	for i := 0; i < len(numdata); i++ {
		nums[numdata[i]] += 1
	}

	fuel2helper := generateFuel2()

	p1, p2 := math.MaxInt, math.MaxInt
	for i := 0; i < 1500; i++ {
		f := fuel(nums, i)
		if f < p1 {
			p1 = f
		}
		f2 := fuel2(nums, fuel2helper, i)
		if f2 < p2 {
			p2 = f2
		}
	}

	fmt.Println("Day 7: ", p1, p2)
}
