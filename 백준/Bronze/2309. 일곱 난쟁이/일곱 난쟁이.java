import java.util.*;
public class Main{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int height[] = new int[9];  
		int sum = 0;
		int sum1 = 0;
		boolean flag = true;
		for(int i = 0; i < 9; i++) {
			height[i] = sc.nextInt();
			sum += height[i];
		}
		
		sum1 = sum - 100;
	    
		for(int i = 0; i < 9; i++) {
			for(int j = 1; j < 9; j++) {
				if(flag == true) {
					if(height[i] == height[j]) 
						continue;
					if(sum1 == height[i] + height[j]) {
						height[i] = -1; 
						height[j] = -1;
						flag = false;
						break;
					}
				}
			}
			if(flag == false)
				break;
		}
		
		Arrays.sort(height);
		for(int x = 0; x < 9; x++) {
			if(!(height[x] == -1))
				System.out.println(height[x]);
		}    
	}
}