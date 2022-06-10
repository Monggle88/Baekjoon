while True:
    a,b = map(int, input().split())
    if a==b==0:
        break
    result = a-b
    if result > 0:
        print("Yes")
    else:
        print("No")