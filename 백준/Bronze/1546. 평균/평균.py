subject = int(input())
scores = list(map(int, input().split(' ')))
fake = []

for i in scores:
  fake.append(i/max(scores)*100)

print(sum(fake)/subject)