import sys

inputArray = []
sentence = ""

# while sentence != "#":
#     sentence = sys.stdin.readline()
#     if sentence != "#":
#         inputArray.append(sentence)

while sentence != "#":
    sentence = input().lower()
    if sentence != "#":
        inputArray.append(sentence)

vowel = ['a', 'e', 'i', 'o', 'u']

resultArray = []

for str in inputArray:
    result = 0

    for i in range(len(str)):
        if str[i] in vowel:
            result += 1

    resultArray.append(result)

for i in range(len(resultArray)):
    print(resultArray[i])
