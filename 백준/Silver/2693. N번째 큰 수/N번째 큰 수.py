for i in range(int(input())):
  lis = list(map(int, input().split()))
  lis.sort(reverse = True)
  print(lis[2])