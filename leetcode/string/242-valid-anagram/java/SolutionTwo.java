
import java.util.*;
public class SolutionTwo{
	public boolean isAnagram(String s,String t){
		if(s == null || t == null || s.length() != t.length())
			return false;
		if(s.length() == 0)
			return true;

		Map<Character ,Integer> map = new HashMap<>();

		for(int i =0;i<s.length();i++){
			char c = s.charAt(i);
			if(map.containsKey(c))
				 map.put(c, map.get(c) + 1);
			else 
				map.put(c,1);
		}
		for(int i =0;i<t.length();i++){
			char c = t.charAt(i);
			if(!map.containsKey(c))
				return false;
			else 
				if (map.get(c)==0) {
					return false;

				}
				map.put(c,map.get(c)-1);
			}
			return true;
		}
		public static void main(String[] args){
			SolutionTwo s = new SolutionTwo();
			Boolean a = s.isAnagram("abc","cba");
			System.out.println(a);
		}
	}
