sugar = int(input())
cnt = 0
while sugar >= 0:
  if sugar%5 == 0:
    print(cnt+(sugar//5))
    break
  sugar -= 3
  cnt += 1
else:
  print(-1)