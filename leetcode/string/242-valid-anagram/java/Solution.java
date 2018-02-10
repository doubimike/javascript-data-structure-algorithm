import java.util.*;
public class Solution {
	public boolean isAnagram(String s,String t){
		if (s==null || t ==null ||s.length() !=t.length()) {
			return false;
		}

		if (s.length()==0) {
			return true;
		}

		char[] sArr = s.toCharArray();
		char[] tArr = t.toCharArray();
		Arrays.sort(sArr);
		Arrays.sort(tArr);

		return Arrays.equals(sArr,tArr);
	}
	public static void main(String[] args){
		Solution s = new Solution();
		Boolean a = s.isAnagram("abc","cba");
		System.out.println(a);
	}
}