a = []

for i in range(9):
  a.append(int(input()))

max_Value = int(a[0])

for j in range(1, len(a)):
  if max_Value < a[j]:
    max_Value = a[j]

print(max_Value)
print(a.index(max_Value)+1)