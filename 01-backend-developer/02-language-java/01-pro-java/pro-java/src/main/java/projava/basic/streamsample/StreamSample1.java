package projava.sample.streamsample;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class StreamSample1 {
    public static void main(String[] args) {
        var data = List.of("yamamoto", "kis", "sugiyama");

        var result = new ArrayList<String>();
        for (String s : data) {
            if (s.length() >= 5) {
                result.add(s);
            }
        }
        System.out.println(result);

        // streamを使う
        var result2 = data.stream().filter(s -> s.length() >= 5).collect(Collectors.toCollection(ArrayList::new));
        System.out.println(result2);

        data.forEach(System.out::println);
    }
}
