n = int(input())
lis = list(map(int, input().split()))
find_num = int(input())
cnt = 0

for i in lis:
    if i == find_num:
        cnt += 1

print(cnt)