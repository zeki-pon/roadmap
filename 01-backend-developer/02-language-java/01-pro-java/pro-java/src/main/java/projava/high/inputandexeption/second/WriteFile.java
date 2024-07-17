package projava.high.inputandexeption.second;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class WriteFile {
    public static void main(String[] args) {
        var message = """
                test
                message
                """;
        var p = Path.of("test.txt");

        try {
            Files.writeString(p, message);
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }

    }
}
