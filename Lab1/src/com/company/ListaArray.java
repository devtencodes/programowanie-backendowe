package com.company;

import java.util.ArrayList;

public class ListaArray {

    public static void main(String[] args) {

        testArray.add("a");
        testArray.add("b");
        testArray.add("c");
        testArray.add("d");
        testArray.add("e");
        testArray.add("f");

        ArrayList<String> toRemove = new ArrayList<String>();
        int count = 2;

        for (int i = 0; i < testArray.size(); i++) {
            if (i % count != 0) {
                toRemove.add(testArray.get(i));
            }
        }
        testArray.removeAll(toRemove);
        System.out.print(testArray);

    }

    static ArrayList<String> testArray = new ArrayList<String>();
}
