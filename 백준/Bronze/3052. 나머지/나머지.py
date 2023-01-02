numbers = []
rest = []

for i in range(10):
  numbers.append(int(input()))
for j in numbers:
  rest.append(j%42)
  
rest = list(set(rest))
print(len(rest))