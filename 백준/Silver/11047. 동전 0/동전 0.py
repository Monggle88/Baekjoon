n,k = map(int, input().split())
coins = []
result = 0

for i in range(n):
    coins.append(int(input()))

coins.sort(reverse=1)

for i in coins:
    if k == 0:
        break
    result += k//i
    k %= i

print(result)