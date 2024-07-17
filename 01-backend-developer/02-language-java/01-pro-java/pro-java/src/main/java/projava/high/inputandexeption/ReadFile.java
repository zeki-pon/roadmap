package projava.high.inputandexeption;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Path;

public class ReadFile {

  public static void main(String[] args) throws IOException {
    try {
      var p = Path.of("src/main/java/projava/sample/inputandexeption/test.txtra");
      String s = Files.readString(p);
      System.out.println(s);
    } catch (NoSuchFileException e) {
      System.out.println("ファイルが見つかりません：" + e.getFile());
    }
  }
}
