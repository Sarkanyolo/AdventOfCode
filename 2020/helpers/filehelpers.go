package helpers

import (
	"bufio"
	"os"
)

func GetFileContent(path string) []string {
	file, _ := os.Open(path)
	defer file.Close()

	sc := bufio.NewScanner(file)
	lines := make([]string, 0)

	for sc.Scan() {
		lines = append(lines, sc.Text())
	}

	return lines
}

func GetFileContentAsInt(path string) []int {
	file, _ := os.Open(path)
	defer file.Close()

	sc := bufio.NewScanner(file)
	lines := make([]int, 0)

	for sc.Scan() {
		lines = append(lines, ToInt(sc.Text()))
	}

	return lines
}
