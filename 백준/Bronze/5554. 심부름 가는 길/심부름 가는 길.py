import math

sum = 0

for i in range(4):
    inputStr= input()
    sum += int(inputStr)
    
print(math.floor(sum/60))
print(sum%60)