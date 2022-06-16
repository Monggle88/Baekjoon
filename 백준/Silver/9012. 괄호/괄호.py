case = int(input())

for i in range(case):
    result = []
    for j in str(input()):
        if j == '(':
            result.append(j)
        elif j == ')':
            if result:
                result.pop()
            else:
                print("NO")
                break
    else:
        if result:
            print("NO")
        elif not result:
            print("YES")