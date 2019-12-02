import hashlib

def findHash(input: str, startwith: str) -> int:
    counter = 0
    while(True):
        m = hashlib.md5()
        m.update(input.format(counter).encode('utf-8'))
        m5 = m.hexdigest()
        if m5.startswith(startwith):
            return counter
        counter += 1

input = "yourinput{}"
print("Part 1:", findHash(input, "00000"))
print("Part 2:", findHash(input, "000000"))