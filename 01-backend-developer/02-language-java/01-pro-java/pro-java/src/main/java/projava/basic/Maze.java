package projava.basic;

import java.io.IOException;

public class Maze {
    public static void main(String[] args) throws IOException {
        record Position(int x, int y) {
            public boolean equals(int x, int y) {
                return this.x == x && this.y == y;
            }
        }
        int[][] map = {
                {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1},
                {1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1},
                {1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1},
                {1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1},
                {1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1},
                {1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1},
                {1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1},
                {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1},
        };
        var current = new Position(1, 1);
        var goal = new Position(9, 6);
        var marker = "o";
        for (; ; ) {
            // 迷路の表示
            // 現在地の周り２マスだけ表示する(5 * 5 マスが表示されるイメージ)
            int min = 0;
            int maxY = map.length - 1;
            int indexY = Math.max(current.y() - 2, 0);
            for (int y = indexY; y <= computeTimes(current.y(), maxY); y++) {
                int maxX = map[y].length - 1;
                int indexX = Math.max(current.x() -2, 0);
                for (int x = indexX; x <= computeTimes(x, maxY); x++) {
                    if (x == current.x() && y == current.y()) {
                        System.out.print(marker);
                    } else if (map[y][x] == 1) {
                        System.out.print("*");
                    } else if (x == goal.x() && y == goal.y()) {
                        System.out.print("G");
                    } else {
                        System.out.print(".");
                    }
                }
                System.out.println();
            }
            // ゴール判定
            if (current.equals(goal)) {
                System.out.println("GOAL!!!");
                break;
            }
            // キー入力処理
            int ch = System.in.read();
            // 押された方向の座標を得る
            var next = switch (ch) {
                case 'a', 'h' -> new Position(current.x() - 1, current.y);
                case 'w', 'u' -> new Position(current.x(), current.y - 1);
                case 's', 'j' -> new Position(current.x() + 1, current.y);
                case 'z', 'n' -> new Position(current.x(), current.y + 1);
                default -> current;
            };

            // currentに変化がない場合はcontinue
            if (current.equals(next.x(), next.y)) {
                continue;
            }

            // 押された方向が通路なら進む
            if (map[next.y()][next.x()] == 0) {
                current = next;
                // 一歩進むごとに表示を切り替える
                marker = marker.equals("o") ? "O" : "o";
            }
            // Enterキーの入力を捨てる
            System.in.read();
        }
    }

    private static int computeTimes(int current, int max) {
         return Math.min(current + 2, max);
    }
}
