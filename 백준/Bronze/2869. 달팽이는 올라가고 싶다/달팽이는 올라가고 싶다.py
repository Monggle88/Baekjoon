import math, sys

an, ng, height = map(int, sys.stdin.readline().split())

result =  math.ceil((height-an)/(an-ng)) + 1

print(result)