case, need_w = map(int, input().split())
woods = list(map(int, input().split()))

min_h = 1
max_h = max(woods)

while min_h <= max_h:
    cut_w = 0
    mid_h = (min_h+max_h)//2
    for i in woods:
        if i >= mid_h:
            cut_w += i-mid_h
    if cut_w >= need_w:
        min_h = mid_h+1
    else:
        max_h = mid_h-1

print(max_h)
