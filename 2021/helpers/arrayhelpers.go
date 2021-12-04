package helpers

func StringsToInts(strarray []string) []int {
	ints := make([]int, 0)

	for i := 0; i < len(strarray); i++ {
		ints = append(ints, ToInt(strarray[i]))
	}

	return ints
}
