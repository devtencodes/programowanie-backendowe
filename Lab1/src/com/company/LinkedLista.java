package com.company;

import java.util.LinkedList;

public class LinkedLista {

    public static void main(String[] args) {

        testLinked.add("a");
        testLinked.add("b");
        testLinked.add("c");
        testLinked.add("d");
        testLinked.add("e");
        testLinked.add("f");

        LinkedList<String> toRemove = new LinkedList<String>();
        int count = 2;

        for (int i = 0; i < testLinked.size(); i++) {
            if (i % count != 0) {
                toRemove.add(testLinked.get(i));
            }
        }
        testLinked.removeAll(toRemove);
        System.out.print(testLinked);

    }

    static LinkedList<String> testLinked = new LinkedList<String>();
}
