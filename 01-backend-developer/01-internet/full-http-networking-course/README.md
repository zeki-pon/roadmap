# goal
freeCodeCampの動画を参考に学習を行う。<br>
https://www.youtube.com/watch?v=2JYT5f2isg4<br>

# 前提知識
しかし、上記動画はJavaScriptの経験が事前条件にあるようだった。<br>
freeCodeCampにはJSの動画もあるのでそちらを参考にする。（MDNのサイトでも良い）<br>
https://www.youtube.com/watch?v=Zi-Q0t4gMC8<br>
→基本文法はMDNのサイトでも触ったことがあるので、未経験の内容のみ成果物として残すことにする。<br>

# マインド
どこにいるのか、何からやるべきなのかは下記段階で現在地を把握する。<br>
* 書き方を学ぶ段階
* プログラムの組み方を学ぶ段階
* アプリケーションの作り方を学ぶ段階

# 実際の進め方
学習の進め方は以下の通り
* インタラクティブ版でch10まで進める
* 動画に戻り、Projを進める

# 詰まったところ
## 1-why-http
写経して動かしたところ、以下のエラー
```
/Users/imazeki/WorkSpace/roadmap/01-backend-developer/01-internet/full-http-networking-course/1-web-communication/code.js:2
const items = await getItemData()
              ^^^^^

SyntaxError: await is only valid in async functions and the top level bodies of modules
    at wrapSafe (node:internal/modules/cjs/loader:1281:20)
    at Module._compile (node:internal/modules/cjs/loader:1321:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
    at Module.load (node:internal/modules/cjs/loader:1208:32)
    at Module._load (node:internal/modules/cjs/loader:1024:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49
```

awaitはasync関数内かモジュールのトップレベルでしか有効にならないようだったので、<br>
code.jsをモジュールとしmain.jsを追加して実行するように修正。<br>
参考：<br>
https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/<br>
https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules<br>

<br>
今度は下記のエラーに

```
import { getItemData, generateKey, logItems } from "./code";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (node:internal/modules/cjs/loader:1281:20)
    at Module._compile (node:internal/modules/cjs/loader:1321:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
    at Module.load (node:internal/modules/cjs/loader:1208:32)
    at Module._load (node:internal/modules/cjs/loader:1024:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49
```

対策は下記のサイト（ちょっと古いが）に記載があった。<br>
https://blog.kimizuka.org/entry/2021/09/10/223310<br>


# 各種リンク
* Code: https://github.com/bootdotdev/fcc-learn-http-assets
* インタラクティブ版: https://www.boot.dev/learn/learn-http
* fetch APIについて：https://developer.mozilla.org/ja/docs/Web/API/Fetch_API