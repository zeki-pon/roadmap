package projava.sample.streamsample;

import java.util.ArrayList;
import java.util.List;

public class StreamSamplePractice1 {
    public static void main(String[] args) {
        var fruits = List.of("apple", "banana", "grape");

        /*
         * 条件；あえてStreamAPIを使わずに書くこと
         */

        // 5文字ちょうどの文字列を表示する
        for (String fruit : fruits) {
            if (fruit.length() == 5) {
                System.out.println(fruit);
            }
        }
        System.out.println();

        // 5文字ちょうどの文字列を取り出した新たなListを作る
        var newFruits = new ArrayList<String>();
        for (String fruit : fruits) {
            if (fruit.length() == 5) {
                newFruits.add(fruit);
            }
        }
        System.out.println(newFruits);
        System.out.println();

        // ５文字ちょうどの文字列の個数を数える
        var count = 0;
        for (String fruit : fruits) {
            if (fruit.length() == 5) {
                count++;
            }
        }
        System.out.println(count);
        System.out.println();

        // 5文字ちょうどの文字列の全てが"p"を含むか確認する
        var hasPs = new ArrayList<Boolean>();
        for (String s : newFruits) {
            if (s.contains("p")) {
                hasPs.add(true);
            } else {
                hasPs.add(false);
            }
        }
        System.out.println(hasPs.contains(false) ? "pを含まない" : "pを含む");
        System.out.println();

        // 5文字ちょうどの文字列のどれか一つでも"p"を含むか確認する
        var hasPs2 = new ArrayList<Boolean>();
        for (String s : newFruits) {
            if (s.contains("p")) {
                hasPs2.add(true);
            } else {
                hasPs2.add(false);
            }
        }
        System.out.println(hasPs2.contains(true) ? "pを含む" : "pを含まない");
    }
}
