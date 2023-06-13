def isIncreasing(s: str) -> bool:
    last: int = int(s[0])
    for i in range(1, len(s)):
        if int(s[i]) < last:
            return False
        last = int(s[i])
    return True


def hasDouble(s: str) -> bool:
    last: str = s[0]
    for i in range(1, len(s)):
        if s[i] == last:
            return True
        last = s[i]
    return False


def exactlyTwo(s: str) -> bool:
    last: str = s[0]
    counter: int = 1
    for i in range(1, len(s)):
        if s[i] == last:
            counter += 1
        else:
            if counter == 2:
                return True
            counter = 1
        last = s[i]
    return counter == 2


low, high = 278384, 824795
counter, counter2 = 0, 0
for i in range(low, high):
    str_i = f"{i}"
    if isIncreasing(str_i) and hasDouble(str_i):
        counter += 1
        if exactlyTwo(str_i):
            counter2 += 1

print("Part 1:", counter)
print("Part 2:", counter2)
