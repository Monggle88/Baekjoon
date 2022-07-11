import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean solution(String[] phoneBook) {
//        1. HashMap 선언
        Map<String, Integer> map = new HashMap<>();

//        2. 모든 전화번호를 HashMap에 추가한다.
        for (int i = 0; i < phoneBook.length; i++) {
            map.put(phoneBook[i], i);
        } // 여기서 Value 값이 되는 i int 값은 무의미하다. (Key만 이용해서 해결할 예정이므로)

//        3. 모든 전화번호의 substring이 HashMap에 존재하는지 확인한다.
        for (int j = 0; j < phoneBook.length; j++) {
            for (int k = 0; k < phoneBook[j].length(); k++) {
                if (map.containsKey(phoneBook[j].substring(0,k))) {
                    return false;
                }
            }
        }
        return true;
    }
}