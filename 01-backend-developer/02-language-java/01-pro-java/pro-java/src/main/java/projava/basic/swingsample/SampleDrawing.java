package projava.sample.swingsample;

import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;

public class SampleDrawing {
    public static void main(String[] args) {
        var frame = new JFrame("drawing");
        // window size
        frame.setSize(600, 400);
        // ウインドウが閉じた時にプログラムを終わらせる
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // 描画した図形を表示する領域を用意
        var label = new JLabel("test");
        frame.add(label);

        // 画像の準備
        var image = new BufferedImage(600, 400, BufferedImage.TYPE_INT_RGB);
        label.setIcon(new ImageIcon(image));

        // 画像に描画処理を行う(青い長方形)
        var graphics = image.createGraphics();
        graphics.setColor(Color.blue);
        graphics.fillRect(100, 200, 30, 40);
        label.repaint();

        // 配置されたコンポーネントに合わせてウインドウサイズを調整
        frame.pack();

        frame.setVisible(true);
    }
}
