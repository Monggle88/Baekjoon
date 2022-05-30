for i in range(int(input())):
  scores = list(map(int, input().split()))
  case = scores[0]
  cnt = 0
  sum = 0
  for j in scores[1:]:
    sum += j
  ave = sum/case
  for k in scores[1:]:
    if k > ave:
      cnt += 1
  result =(cnt/case)*100
  print(f"{result:.3f}"+'%')