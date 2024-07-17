package projava.basic.methodsample;

public class MethodSample {
    public static void main(String[] args) {
        // staticメソッド
        System.out.println(twice(2));

        // インスタンスメソッド
        var kis = new Student("kis", 60, 80);
        var a = kis.average();
        System.out.println("平均点は%d点".formatted(a));
        kis.showResult();
        int max = kis.maxScore();
        System.out.println("最高点は%d点です".formatted(max));
    }
    static int twice(int i) {
        return i * 2;
    }

    record Student(String name, int englishScore, int mathScore) {
        int average() {
            return (this.englishScore() + this.mathScore()) / 2;
        }

        void showResult() {
            System.out.println("%sさんの平均点は%d点です".formatted(this.name, average()));
        }

        public int maxScore() {
            return Math.max(this.englishScore, this.mathScore);
        }
    }
}
