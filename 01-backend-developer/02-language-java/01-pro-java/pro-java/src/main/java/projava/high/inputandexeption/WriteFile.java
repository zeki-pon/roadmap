package projava.high.inputandexeption;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class WriteFile {

  public static void main(String[] args) throws IOException {
    var message = """
        test
        message
        """;
    var p = Path.of("src/main/java/projava/sample/inputandexeption/test.txt");
    Files.writeString(p, message);
    System.out.println(Files.readString(p));
    System.out.println(Files.size(p));
    System.out.println(Files.getLastModifiedTime(p));
    System.out.println(Files.exists(p));
    System.out.println(Files.isDirectory(p));
    System.out.println(Files.list(p)); // NotDirectoryException
  }

}
