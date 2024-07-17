package projava.basic.loopsample;

import java.util.List;

public class ForEachSample {
    public static void main(String[] args) {
        // Listの全ての要素を表示する(基本for文を使用すること)
        var names = List.of("yusuke", "Kis", "sugiyama");
        for (int i = 0; i < names.size(); i++) {
            System.out.println(names.get(i));
        }

        for (String name: names) {
            System.out.println(name);
        }

        // names.forと入力するだけで変換可能
        for (String name : names) {
            System.out.println(name);
        }
    }
}
