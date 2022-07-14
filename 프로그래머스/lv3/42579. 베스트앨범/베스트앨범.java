import java.util.*;

class Solution {
    public int[] solution(String[] genres, int[] plays) {
//        1. 해시맵 작성
        HashMap<String, Integer> map = new HashMap<>();
        for(int i = 0; i < genres.length; i++) {
            map.put(genres[i], map.getOrDefault(genres[i], 0) + plays[i]);
        }

//        2. 재생수가 높은 순으로 정렬된 장르 리스트 구하기
//            2-1. 장르 리스트 만들기
        ArrayList<String> genreList = new ArrayList<>();
        for (String key : map.keySet()) {
            genreList.add(key);
        }
//            2-2. playCount 기준 내림차순으로 장르 정렬
        Collections.sort(genreList, (o1, o2) -> map.get(o2) - map.get(o1));

//        3. 재생수 상위 2곡의 고유번호를 list에 담기
        ArrayList<Integer> resultList = new ArrayList<>();

        for (int i = 0; i < genreList.size(); i++) {
            String gen = genreList.get(i);

//            3-1. for문을 돌며 재생수가 가장 많은 index를 찾는다.
            int max = 0;
            int index1 = -1;
            for (int j = 0; j < genres.length; j++) {
                if (gen.equals(genres[j]) && max < plays[j]) {
                    max = plays[j];
                    index1 = j;
                }
            }

//            3-2. 재생수가 두번째로 많은 index를 찾는다.
            max = 0;
            int index2 = -1; // 두번째 index는 존재하지 않을 수도 있음.
            for (int j = 0; j < genres.length; j++) {
                if (gen.equals(genres[j]) && max < plays[j] && j != index1) {
                    max = plays[j];
                    index2 = j;
                }
            }

//            3-3. resultList에 각각의 index를 등록
            resultList.add(index1);
            if (index2 >= 0) {
                resultList.add(index2);
            }
        }
//        4. 출제된 index값을 answer배열에 등록하여 출력
        int[] answer = new int[resultList.size()];
        for (int i = 0; i < resultList.size(); i++) {
            answer[i] = resultList.get(i);
        }

        return answer;
    }
}