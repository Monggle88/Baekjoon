chess = [1,1,2,2,2,8]
f_chess = list(map(int, input().split()))
result = []
cnt = 0

for i in chess:
    if i != f_chess[cnt]:
        a = i-f_chess[cnt]
        result.append(a)
    else:
        result.append(0)
    cnt += 1

print(*result)