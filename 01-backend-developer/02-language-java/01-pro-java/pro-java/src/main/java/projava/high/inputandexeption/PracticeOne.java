package projava.high.inputandexeption;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class PracticeOne {

  public static void main(String[] args) {
    try {
      var message = """
          test
          message
          """;
      var p = Path.of("src/main/java/projava/sample/inputandexeption/test.txtra");
      Files.writeString(p, message);
      Files.deleteIfExists(p);
      Files.readString(p);
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
