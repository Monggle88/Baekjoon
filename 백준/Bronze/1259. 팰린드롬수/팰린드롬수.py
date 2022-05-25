while True:
  q = list(input())
  a = list(reversed(q))
  if q == ['0']:
    break
  elif q == a:
    print('yes')
  else:
    print('no')