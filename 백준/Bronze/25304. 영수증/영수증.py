import sys

sumValue = int(sys.stdin.readline().strip())
howMany = int(sys.stdin.readline().strip())

result = 0;

for i in range(howMany):
    price, number = sys.stdin.readline().strip().split(' ')
    result += (int(price) * int(number))

if result == sumValue:
    print('Yes')
else: print('No')