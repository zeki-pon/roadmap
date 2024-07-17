package projava.high.inputandexeption.second;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class ReadFile {
    public static void main(String[] args) {
        try {
            var p = Path.of("test.txtra");
            String s = Files.readString(p);
            System.out.println(s);
        } catch (IOException ioe) {
            System.out.println("ファイルが見つかりません");
        }

    }
}
