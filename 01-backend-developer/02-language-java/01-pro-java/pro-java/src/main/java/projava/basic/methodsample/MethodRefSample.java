package projava.basic.methodsample;

import java.util.stream.IntStream;

public class MethodRefSample {
    public static void main(String[] args) {
        IntStream.range(0, 3)
//                .map(MethodRefSample::twice)
                .map(x -> MethodRefSample.twice(x))
                .forEach(System.out::println);
    }
    static int twice(int x) {
        return x * 2;
    }
}
