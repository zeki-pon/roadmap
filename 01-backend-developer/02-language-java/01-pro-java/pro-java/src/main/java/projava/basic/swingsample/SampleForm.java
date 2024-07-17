package projava.sample.swingsample;

import javax.swing.*;

public class SampleForm {
    public static void main(String[] args) {
        var frame = new JFrame("test");
        // window size
        frame.setSize(600, 400);
        // ウインドウが閉じた時にプログラムを終わらせる
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Northの位置にテキストフィールドを配置
        var text1 = new JTextField();
        frame.add("North", text1);

        // Southの位置にテキストフィールドを配置
        var text2 = new JTextField();
        frame.add("South", text2);

        var button = new JButton("toUpper");
        frame.add(button);

        button.addActionListener(ae -> text2.setText(text1.getText().toUpperCase()));

        frame.setVisible(true);
    }
}
