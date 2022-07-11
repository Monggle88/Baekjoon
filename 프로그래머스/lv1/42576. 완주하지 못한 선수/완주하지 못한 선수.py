import collections

def solution(participant, completion):
    result = collections.Counter(participant) - collections.Counter(completion)
    answer = list(result.keys())[0]
    return answer