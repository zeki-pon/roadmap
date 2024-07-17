package projava.high.web;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

/**
 * HttpClient APIを利用するサンプルコード
 */
public class WebClient2 {
    public static void main(String[] args) throws IOException, InterruptedException {
        // step1: HttpClientの用意
        HttpClient client = HttpClient.newHttpClient();

        // step2: HttpRequestの用意
        URI uri = URI.create("https://example.com/");
        HttpRequest req = HttpRequest.newBuilder(uri).build();

        // step3: 用意したHttpRequestを送信してレスポンスの処理
        HttpResponse<String> response = client.send(
                req, HttpResponse.BodyHandlers.ofString());
        String body = response.body();
        body.lines()
                .limit(10)
                .forEach(System.out::println);
    }
}
