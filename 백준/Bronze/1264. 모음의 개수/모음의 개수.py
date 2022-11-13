import sys
import re

pattern = re.compile('[aeiou]')

while True:
    inputStr = sys.stdin.readline().strip().lower()
    if inputStr == "#": break

    result = pattern.findall(inputStr)

    print(len(result))
