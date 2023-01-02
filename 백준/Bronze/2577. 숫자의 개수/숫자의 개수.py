a = int(input())
b = int(input())
c = int(input())
x = list(str(a*b*c))
for j in range(10):
  print(x.count(f'{j}'))