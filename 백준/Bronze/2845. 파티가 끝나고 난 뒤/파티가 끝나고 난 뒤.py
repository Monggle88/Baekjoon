import sys

inputArray1 = []
inputArray2 = []
for i in range(2):
    input = (sys.stdin.readline().strip().split(' '))
    if (len(input) == 2):
        for j in range(2):
            inputArray1.append(int(input[j]))
    else:
        for j in range(5):
            inputArray2.append(int(input[j]))


people = inputArray1[0] * inputArray1[1]

printout = []

for num in inputArray2:
    if (people != num):
        result = num - people
        printout.append(result)
    else:
        printout.append(0)

print(' '.join(map(str, printout)))