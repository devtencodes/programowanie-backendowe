package com.company;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class Zad6 {

    public static void main(String[] args) {
        // Reading from string
        String str = "tekst1\n tekst2\r tekst3\n tekst4\r\n";
        readFromString(str);


        // Reading from file
        List<String> content = readTextFromFile();
        printFromFile(content);
    }


    public static void readFromString(String str) {
        String[] strings = str.split("\\r?\\n|\\r");

        int itt = 1;
        for (String string: strings) {
            System.out.println("Linia " + itt + " ----- " + string);
            itt++;
        }
    }

    public static List<String> readTextFromFile() {
        List<String> output = new ArrayList<>();
        try {

            // Gdyby Pan chcial testowac, polecam zmienić ścieżkę
            File myObj = new File("src/com/company/Zad6.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                output.add(data);
            }
            myReader.close();

        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        return output;
    }

    public static void printFromFile(List<String> strings) {
        int itt = 1;
        for (String string: strings) {
            System.out.println("Linia " + itt + " ----- " + string);
            itt++;
        }
    }
}
