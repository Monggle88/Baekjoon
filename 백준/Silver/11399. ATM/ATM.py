n = int(input())
lis = list(map(int, input().split()))
lis.sort()
lis_time = [0]

for i in lis:
    lis_time.append(lis_time[-1]+i)

print(sum(lis_time))