import sys

input = sys.stdin.readlines()[1:]

input.sort(key=lambda x:int(x.split(' ')[0]))

print("\n".join(input).replace("\n\n", "\n"))