package projava.basic.methodsample;

public class MethodSamplePractice1 {
    public static void main(String[] args) {
        var msp1 = new MethodSamplePractice1();
        msp1.printMessage();
        msp1.salutation("Henri");
        msp1.helloHello(4);
        System.out.println();
        System.out.println("3 * 2 = " + msp1.db(3));
        System.out.println("3 * 3 = " + msp1.triple(3));
        System.out.println(msp1.repeatStringTwice("abc"));
        System.out.println("4, 5どちらが大きいか？　→　" + msp1.max(4, 5));
        System.out.println("4, 5, 6どれが大きいか？　→　" + msp1.max3(4, 5, 6));
    }

    private void printMessage() {
        System.out.println("hello!");
    }

    private void salutation(String person) {
        System.out.println("Hello " + person);
    }

    private void helloHello(int count) {
        for (int i = 0; i < count; i++) {
            System.out.print("hello");
        }
    }

    private int db(int n) {
        return n * 2;
    }

    private int triple(int n) {
        return n * 3;
    }

    private String repeatStringTwice(String str) {
        return str.repeat(2);
    }

    private int max(int a, int b) {
        return Math.max(a, b);
    }

    private int max3(int a, int b, int c) {
        // 自分で書いたコード
//        if (a > b) {
//            if (a > c) {
//                return a;
//            }
//        } else if (b > a) {
//            if (b > c) {
//                return b;
//            }
//        } else if (c > a) {
//            return c;
//        }

        // chatGPT
        int max = a;
        if (b > max) max = b;
        if (c > max) max = c;
        return max;
    }
}
