package com.company;
import java.util.HashMap;

class RemovingDuplicates
{

    public static void main(String[] args)
    {
        int[] array = { 1, 2, 3, 1, 2, 3, 4, 2, 5, 6 };
        int n = array.length;
        removeDuplicates(array, n);
    }

    static void removeDuplicates(int[] arr, int n)
    {
        HashMap<Integer,
                Boolean> map = new HashMap<>();

        for (int i = 0; i < n; ++i)
        {

            if (map.get(arr[i]) == null)
                System.out.print(arr[i] + " ");

            map.put(arr[i], true);
        }
    }
}
