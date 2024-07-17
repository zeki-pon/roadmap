package projava.high.web;

import javax.net.SocketFactory;
import javax.net.ssl.SSLSocketFactory;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

/**
 * 対象ドメインの80番ポートに接続して3行送信
 * 受け取った文字列を18行分表示
 */
public class WebClient {
    public static void main(String[] args) throws IOException {
        var domain = "www.google.com";

        SocketFactory factory = SSLSocketFactory.getDefault();
        try (var soc = factory.createSocket(domain, 443);
             var pw = new PrintWriter(soc.getOutputStream());
             var isr = new InputStreamReader(soc.getInputStream());
             var bur = new BufferedReader(isr))
        {
            pw.println("GET /index.html HTTP/1.1");
            pw.println("Host: " + domain);
            pw.println(); // 空行を送るとリクエストは終了、レスポンス待ちとなる
            pw.flush();  // 強制的に送信
            bur.lines()
                    .limit(20)
                    .forEach(System.out::println);
        }
    }
}
