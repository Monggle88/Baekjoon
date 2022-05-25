v = input()
a = []
for i in str(v):
  a.append(i)
sol = int(a[-1])
if sol%2 != 0:
  print('SK')
else:
  print('CY')