package co.com.sofka.mentoring35.cardshuffle.utils;

public class Utils {
    public static int getRandomInt(int min, int max){
        return min + (int)(Math.random() * ((max - min) + 1));
    }
}
