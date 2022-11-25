N = int(input())
fibo = [0,1]

for _ in range(2,N+1):
    fibo.append(fibo[_-2] + fibo[_-1])

print(fibo[N])