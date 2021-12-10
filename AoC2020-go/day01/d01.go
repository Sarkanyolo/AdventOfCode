package day01

import (
	"fmt"
	"main/helpers"
)

func Solve() {
	input := helpers.GetFileContentAsInt("day01/input.txt")

	fmt.Println("Day01: ", first(input), second(input))
}

func first(input []int) int {
	for i := 0; i < len(input)-1; i++ {
		for j := i + 1; j < len(input); j++ {
			if input[i]+input[j] == 2020 {
				return input[i] * input[j]
			}
		}
	}

	return 0
}

func second(input []int) int {
	for i := 0; i < len(input)-2; i++ {
		for j := i + 1; j < len(input)-1; j++ {
			for k := j + 1; k < len(input); k++ {
				if input[i]+input[j]+input[k] == 2020 {
					return input[i] * input[j] * input[k]
				}
			}
		}
	}

	return 0
}
