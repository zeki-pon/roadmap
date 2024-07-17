package projava.high.web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

/**
 * 対象ドメインの80番ポートに接続して3行送信
 * 受け取った文字列を18行分表示
 */
public class WebClient {
    public static void main(String[] args) throws IOException {
        var domain = "example.com";
        try (var soc = new Socket(domain, 80);
             var pw = new PrintWriter(soc.getOutputStream());
             var isr = new InputStreamReader(soc.getInputStream());
             var bur = new BufferedReader(isr))
        {
            pw.println("GET /index.html HTTP/1.1");
            pw.println("Host: " + domain);
            pw.println();
            pw.flush();
            bur.lines()
                    .limit(20)
                    .forEach(System.out::println);
        }
    }
}
