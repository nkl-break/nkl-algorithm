import java.util.*;
class Solution {
    public int[] solution(int[] numlist, int n) {

        Integer[] arr = new Integer[numlist.length];
        for (int i = 0; i < numlist.length; i++) {
            arr[i] = numlist[i];
        }

        Arrays.sort(arr, new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                int sub1 = Math.abs(o1 - n);
                int sub2 = Math.abs(o2 - n);

                if (sub1 < sub2) {
                    return -1;
                }

                if (sub1 > sub2) {
                    return 1;
                }

                if (o1 > o2) {
                    return -1;
                }
                
                return 1;
            }
        });
        
        for (int i = 0; i < arr.length; i++) {
            numlist[i] = arr[i];
        }
        
        return numlist;
    }
        
}