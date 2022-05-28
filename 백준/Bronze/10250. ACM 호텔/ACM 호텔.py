for i in range(int(input())):
  floor, rooms, visiter = map(int, input().split(' '))
  use_line = 0
  while visiter > floor:
    visiter -= floor
    use_line += 1
  a_floor = floor-(floor - visiter)
  a_room = str(use_line + 1).zfill(2)
  print('{0}{1}'.format(a_floor, a_room))