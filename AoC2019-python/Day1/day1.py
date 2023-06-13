from typing import List


def getLines(filename: str) -> List[str]:
    with open(filename) as file:
        return [line.strip() for line in file]


def fuelNeeded(mass: int) -> int:
    return mass // 3 - 2


def fuelNeededWithFuel(mass: int) -> int:
    fuel = fuelNeeded(mass)
    if fuel < 0:
        return 0

    extra = max(0, fuelNeeded(fuel))
    return fuel + extra + fuelNeededWithFuel(extra)


intLines = [int(line) for line in getLines("day1.txt")]
part1 = [fuelNeeded(line) for line in intLines]
print("Part1:", sum(part1))

part2 = [fuelNeededWithFuel(line) for line in intLines]
print("Part2:", sum(part2))
