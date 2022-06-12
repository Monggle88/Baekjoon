import math
Case = 0
while True:
    Case += 1
    L, P, V = map(int, input().split())
    if L == P == V == 0:
        break
    cul1 = L*(math.floor(V/P))
    cul2 = min(V%P, L)
    result = cul1+cul2
    print("Case %d: %d"%(Case, result))