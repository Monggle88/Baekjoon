sn = list(map(int, input().split(' ')))
a = 0
for i in sn:
  a += i*i
print(a%10)