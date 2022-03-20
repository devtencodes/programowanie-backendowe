package com.company;
import java.util.HashMap;

class Counting
{

    public static void main(String[] args)
    {
        HashMap<String, String> capitalCities = new HashMap<String, String>();

        capitalCities.put("England", "London");
        capitalCities.put("Germany", "Berlin");
        capitalCities.put("Norway", "Oslo");
        capitalCities.put("USA", "Washington DC");


        // Nie do końca rozumiem o co chodziło w ilości wierszy
        System.out.println(capitalCities.size());
    }
}
