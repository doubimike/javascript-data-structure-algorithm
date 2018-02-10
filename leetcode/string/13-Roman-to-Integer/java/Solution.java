/*
* @Author: zhanghang
* @Date:   2018-02-07 23:46:20
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-07 23:51:09
*/


class Solution{
    public int romanToInt(String s){
        HashMap<Character ,Integer> romanMap = new HashMap<Character,Integer>();

        romanMap.put('I',1);
        romanMap.put('V',5);
        romanMap.put('X',10);
        romanMap.put('L',50);
        romanMap.put('C',100);
        romanMap.put('D',500);
        romanMap.put('M',1000);

        char[] input = s.toCharArray();
        int sum = 0;
        for( int i=0;i<input.length;i++){
            int left = romanMap.get(input[i]);
            int right = 0;
            if((i+1)<input.length){
                right += romanMap.get(input[i+1]);
            }

            if (left>=right) {
                sum = sum +left;
            }else {
                sum = sum -left;
            }
        }

        return sum;
    }
}