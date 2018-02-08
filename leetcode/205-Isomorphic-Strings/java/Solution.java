// 说实话还是有很多细节看不懂，看的有点头晕啊
class Solution{
	public boolean isIsomorphic(String s,String t){
		if (s.length()!==t.length()) {
			return false;
		}

		char[] sch = s.toCharArray();
		char[] tch = t.toCharArray();
		char[] sn = new Char[256];
		char[] tn = new Char[256];


		for(int i =0;i<sch.length;i++){
			if(sn[sch[i]]==0&&tn[tch[i]]==0){
				sn[sch[i]]=tch[i];
				tn[tch[i]]=sch[i];
			}else if(sn[sch[i]]!=tch[i]&&tn[tch[i]]!=sch[i]){
				return false;
			}
		}

		return true;
	}
}