package projava.sample.streamsample;

import java.util.List;

public class StreamSample2 {
    public static void main(String[] args) {
        var data = List.of("yamamoto", "kis", "sugiyama");

        var result = 0;
        for (String s : data) {
            if (s.length() >= 5) {
                result++;
            }
        }
        System.out.println(result);

        var result2 = (int) data.stream().filter(s -> s.length() >= 5).count();
        System.out.println(result2);
    }
}
