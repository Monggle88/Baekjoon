for i in range(int(input())):
  Y, K = 0, 0
  for i in range(9):
    Y_score, K_score = map(int, input().split())
    Y += Y_score
    K += K_score
  if Y > K:
    print("Yonsei")
  elif Y < K:
    print("Korea")
  else:
    print("Draw")