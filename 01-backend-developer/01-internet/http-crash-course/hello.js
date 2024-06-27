// https://developer.mozilla.org/ja/docs/Learn/Server-side/Express_Nodejs/development_environment
// HTTPモジュールの読み込み
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

// HTTPサーバーを作成
const server = http.createServer(function (req, res) {
    // HTTPステータスとコンテンツタイプを持つHTTPヘッダーのレスポンスを設定
    res.statusCode = 200;
    resourceLimits.setHeader("Content-Type", "text/plain");

    // レスポンス本体の"Hello World"を送信
    res.end("Hello World\n");
});

// サーバーにアクセスするためのURLを出力
server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
})