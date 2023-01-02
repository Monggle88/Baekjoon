a,b,c = map(int, input().split(' '))

x = (a+b)%c
y = ((a%c) + (b%c))%c
z = (a*b)%c
w = ((a%c) * (b%c))%c

print(x,y,z,w,sep='\n')