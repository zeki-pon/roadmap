package projava.sample.streamsample;

import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class StreamSamplePractice3 {
    public static void main(String[] args) {
        // "test"を３回連結して"testtesttest"を出力する処理
        var result1 = IntStream.range(0, 3).mapToObj(i -> "test").collect(Collectors.joining());
        System.out.println(result1);
    }
}
