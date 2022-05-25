x = int(input())
r = 0
for i in range(1, x+1):
  r = ( i + r )
  i += 1
print(r)