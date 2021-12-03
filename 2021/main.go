package main

import (
	"fmt"
	"time"
)

func main() {
	start := time.Now()
	for i := 0; i < 1000; i++ {
		day1()
	}

	elapsed := time.Since(start)
	fmt.Println(elapsed)
}
