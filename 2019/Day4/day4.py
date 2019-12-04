from typing import List, Tuple, Dict

def getLines(filename: str) -> List[str]:
   with open(filename) as file:
      return [line.strip() for line in file]

def manhattan(point: Tuple[int, int]) -> int:
    return abs(point[0]) + abs(point[1])

def getPath(steps: List[str]) -> Dict[Tuple[int, int], int]:
    x, y = 0, 0
    line = {}
    i = 0
    for s in steps:
        dir = s[0]
        length = int(s[1:])
        for _ in range(length):
            i += 1
            if dir == 'R':
                x += 1
            elif dir == 'L':
                x -= 1
            elif dir == 'D':
                y += 1
            else:
                y -= 1
            line[x, y] = i
    return line

lines = getLines("input.txt")
l1: List[str] = lines[0].split(",")
l2: List[str] = lines[1].split(",")

l1_path = getPath(l1)
l2_path = getPath(l2)

intersect = set(l1_path) & set(l2_path)

result = { manhattan(p): l1_path[p] + l2_path[p] for p in intersect }

print("Part 1: ", min(result.keys()))
print("Part 2: ", min(result.values()))