snackPrice, num, money = input().split(' ')

sumPrice = int(snackPrice) * int(num)

if int(sumPrice) > int(money):
    print(int(sumPrice) - int(money))
else:
    print(0)