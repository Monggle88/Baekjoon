result = int(input())
if 90 <= result <= 100:
  rank = 'A'
elif 80 <= result <= 89:
  rank = 'B'
elif 70 <= result <= 79:
  rank = 'C'
elif 60 <= result <= 69:
  rank = 'D'
else:
  rank = 'F'
print(rank)