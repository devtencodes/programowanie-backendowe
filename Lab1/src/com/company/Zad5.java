package com.company;
import java.text.SimpleDateFormat;
import java.util.*;

public class Zad5 {

    public static void main(String[] args) {
        // It's not beautiful but it works
        getLocalTime();
        getGlobalTime();
    }

    public static void getLocalTime() {
        Date date=new Date();
        String localDate = new SimpleDateFormat("yyyy.MM.dd  HH:mm").format(date);
        System.out.println("Your local time is: " + localDate);
    }

    public static void getGlobalTime() {
        SimpleDateFormat f = new SimpleDateFormat("yyyy-MMM-dd HH:mm:ss");
        f.setTimeZone(TimeZone.getTimeZone("UTC"));
        String date = f.format(new Date());
        System.out.println("Your global time is :" + date);
    }
}
