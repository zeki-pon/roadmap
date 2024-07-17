package projava.basic.lambdasample;

public class LambdaSamplePractice1 {
    public static void main(String[] args) {
    }

    // method1
    boolean check(String s) {
        return s.contains("y");
    }

    // lambda
//    s -> s.contains("y")

    // method2
    void print(String s) {
        System.out.println(s);
    }
    // lambda
//    s -> System.out.println(s)

    // lambda1
    // s -> s,toUpperCase()

    // method
    String upper(String s) {
        return s.toUpperCase();
    }

    // lambda2
    // s -> s.isEmpty()

    // method
    boolean empty(String s) {
        return s.isEmpty();
    }

}
