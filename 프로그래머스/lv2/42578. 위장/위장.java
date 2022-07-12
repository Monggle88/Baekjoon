import java.util.HashMap;
import java.util.Iterator;

class Solution {
    public int solution(String[][] clothes) {
        HashMap<String, Integer> closet = new HashMap<>();
        for (String[] clothe : clothes) {
            String type = clothe[1];
            closet.put(type, closet.getOrDefault(type, 0) + 1);
        }

        int answer = 1;
        Iterator<Integer> allItems = closet.values().iterator();
        while (allItems.hasNext()) {
            answer *= allItems.next().intValue() + 1;
        }

        return answer - 1;
    }
}