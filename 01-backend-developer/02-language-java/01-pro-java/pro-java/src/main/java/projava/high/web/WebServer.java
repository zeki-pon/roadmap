package projava.high.web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class WebServer {
    public static void main(String[] args) throws IOException {
        // 8880ボートで待ち受けするソケットを用意
        var server = new ServerSocket(8880);
        // 何度もリクエストを受け付ける
        for (;;) {
            try (Socket soc = server.accept(); // 通信を待ち受ける
                var isr = new InputStreamReader(soc.getInputStream());
                var bur = new BufferedReader(isr);
                var w   = new PrintWriter(soc.getOutputStream())
            ) {
                System.out.println("connected from " + soc.getInetAddress());
                // リクエストヘッダーの読み込み
                bur.lines()
                        .takeWhile(line -> !line.isEmpty())
                        .forEach(System.out::println);
                // レスポンス
                w.println("""
                        HTTP/1.1 200 OK
                        Content-Type: text/html
                        
                        <html><head><title>Hello</title></head>
                        <body><h1>Hello</h1>It works!</body></html>
                        """);
            }
        }
    }
}
