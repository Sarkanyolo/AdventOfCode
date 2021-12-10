package helpers

func StringsToInts(strarray []string) []int {
	ints := make([]int, 0)

	for i := 0; i < len(strarray); i++ {
		ints = append(ints, ToInt(strarray[i]))
	}

	return ints
}

func Permutations(s string) []string {
	var helper func([]rune, int)
	arr := []rune(s)
	res := []string{}

	helper = func(arr []rune, n int) {
		if n == 1 {
			tmp := make([]rune, len(arr))
			copy(tmp, arr)
			res = append(res, string(tmp))
		} else {
			for i := 0; i < n; i++ {
				helper(arr, n-1)
				if n%2 == 1 {
					tmp := arr[i]
					arr[i] = arr[n-1]
					arr[n-1] = tmp
				} else {
					tmp := arr[0]
					arr[0] = arr[n-1]
					arr[n-1] = tmp
				}
			}
		}
	}
	helper(arr, len(arr))
	return res
}
