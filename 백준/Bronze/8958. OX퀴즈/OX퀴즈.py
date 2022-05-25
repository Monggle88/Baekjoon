for i in range(int(input())):
  l = list(input())
  score = 0
  combo = 0
  for i in l:
    if i == 'O':
      combo += 1
      score += combo
    else:
      combo = 0
  print(score)