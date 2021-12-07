import numpy as np
data = crabs = np.loadtxt("input.txt", delimiter=",", dtype=int)
uses,cuses = [],[]
for i in range(np.min(crabs),np.max(crabs)+1,1):
    use = cuse =  0
    for j in crabs:
        use += abs(j - i)
        cuse += sum(range(abs(j - i)+1))
    uses.append(use)
    cuses.append(cuse)
print(min(uses))
print(min(cuses))