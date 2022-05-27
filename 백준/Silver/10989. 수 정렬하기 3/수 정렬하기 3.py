import sys

nums = [0] * 10001
for i in range(int(input())):
    nums[int(sys.stdin.readline())] += 1
for j in range(10001):
    if nums[j] != 0:
        for k in range(nums[j]):
            print(j)