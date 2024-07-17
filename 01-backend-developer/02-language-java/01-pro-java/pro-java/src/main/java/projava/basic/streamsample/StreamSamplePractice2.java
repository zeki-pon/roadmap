package projava.sample.streamsample;

import java.util.List;
import java.util.stream.Collectors;

public class StreamSamplePractice2 {
    public static void main(String[] args) {
        // Streamを使用して下記のListに対して処理を行う
        var strs = List.of("apple", "banana", "orange", "pineapple");

        // ６文字以上のものを大文字にして表示
        var result1 = strs.stream().filter(s -> s.length() >= 6).collect(Collectors.joining(","));
        System.out.println(result1);
        System.out.println();

        // 6文字以上のものの文字数の合計を表示
        var result2 = strs.stream().filter(s -> s.length() >= 6).count();
        System.out.println(result2);
        System.out.println();

        // 全ての文字列がaを含んでいるかどうか判定
        var result3 = strs.stream().allMatch(s -> s.contains("a"));
        System.out.println(result3);
        System.out.println();

        // cを含むものが１つでもあるかどうか判定
        var result4 = strs.stream().anyMatch(s -> s.contains("c"));
        System.out.println(result4);
    }
}
