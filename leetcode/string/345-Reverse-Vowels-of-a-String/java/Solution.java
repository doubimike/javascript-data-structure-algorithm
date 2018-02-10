class Solution {
	public String reverseVowels (String s){
		int [] alphabet = new int[123];
		alphabet['a']=1;
		alphabet['A']=1;
		alphabet['e']=1;
		alphabet['E']=1;
		alphabet['i']=1;
		alphabet['I']=1;
		alphabet['o']=1;
		alphabet['O']=1;
		alphabet['u']=1;
		alphabet['U']=1;

		int head = 0;
		int tail = s.length() -1;
		char[] cs = s.toCharArray();
		while(head<tail){
			while(head<tail && alphabet[cs[head]]==0) head++;
			while(head<tail && alphabet[cs[tail]]==0) tail--;
			if (head<tail) {
				char tmp = cs[head];
				cs[head]= cs[tail];
				cs[tail] = tmp;
				head++;
				tail--;
			}
		}

		return new String(cs);
	}
	public static void main(String[] args){
		Solution s = new Solution();
		String a = s.reverseVowels("hello");
		System.out.println(a);
	}
}