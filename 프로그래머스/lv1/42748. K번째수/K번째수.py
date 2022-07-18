def solution(array, commands):
    answer = []
    for i in range(len(commands)):
        command = array[commands[i][0]-1:commands[i][1]]
        command.sort()
        answer.append(command[commands[i][2]-1])
    return answer