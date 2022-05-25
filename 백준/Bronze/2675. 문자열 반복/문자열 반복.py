for n in range(int(input())):
  r,s = input().split(' ')
  s = list(str(s))
  for i in s:
    for j in range(int(r)):
     print(i, end='')
  print()