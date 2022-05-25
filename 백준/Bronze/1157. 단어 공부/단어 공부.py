var = list(input().upper())
set_var = list(set(var))
word_cnt = []

for i in set_var:
  word_cnt.append(var.count(i))
if word_cnt.count(max(word_cnt)) > 1:
  print('?')
else:
  print(set_var[word_cnt.index(max(word_cnt))])