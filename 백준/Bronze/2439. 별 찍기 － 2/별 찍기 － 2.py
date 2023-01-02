n = int(input())
s = n-1
for i in range(1, n+1):
  print(' '*(s),'*'*i,sep='')
  s -= 1