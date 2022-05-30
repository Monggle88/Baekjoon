h, m = map(int, input().split(' '))
ov = int(input())

re_h = 0
re_m = 0

if m + ov >= 60:
  re_h = (h+(m + ov)//60)
  re_m += (m+ov)%60
else:
  re_m = m+ov
  re_h = h

if re_h >= 24:
  re_h -= 24

print(re_h, re_m)