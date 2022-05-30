a = int(input())
h,t,n = map(int, input())
print(a*n, a*t, a*h, sep='\n')
print((a*n)+(a*t*10)+(a*h*100))