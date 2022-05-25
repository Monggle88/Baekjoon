scores = []
score_index = []

for i in range(8):
  scores.append(int(input()))
sor = sorted(scores, reverse = True)
print(sum(sor[:5]))

for j in range(5):
  score_index.append(scores.index(sor[j]))
result = sorted(score_index)

for i in result:
  print(int(i)+1, end = ' ')