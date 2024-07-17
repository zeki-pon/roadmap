package projava.high.network;

import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;

public class SimpleClient {
    public static void main(String[] args) throws IOException {
        try (var soc = new Socket("localhost", 1702);
             OutputStream output = soc.getOutputStream();)
        {
            output.write(234);
        } catch (IOException ioe) {
            System.out.println("サーバーが起動していません");
        }
    }
}
