public class SolutionThree {
	public boolean isAnagram(String s, String t) {
		if(s == null || t == null || s.length() != t.length())
			return false;
		if(s.length() == 0)
			return true;
		int[] bitMap = new int[26];
		
        // for(int i = 0; i < s.length(); i++) {
        // 	System.out.println(s.charAt(i) - 'a');
        //     bitMap[s.charAt(i) - 'a']++;
        //     bitMap[t.charAt(i) - 'a']--;
        // }
		
        // for(int i : bitMap)
        //     if(i != 0)
        //         return false;

        // 分开遍历s和t可以剪枝不少case。
		for (int i = 0; i < s.length(); i++) {
			bitMap[s.charAt(i) - 'a']++;
		}
		for (int i = 0; i < t.length(); i++) {
			if (bitMap[t.charAt(i) - 'a'] <= 0) {
				return false;
			} else {
				bitMap[t.charAt(i) - 'a']--;    
			}
		}   
		
		return true;

	}
	public static void main(String[] args){
		SolutionThree s = new SolutionThree();
		Boolean a = s.isAnagram("abc","cba");
		System.out.println(a);
	}
}