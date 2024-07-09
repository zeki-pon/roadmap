// rejectの挙動について理解する（ここではasync, awaitを使わない）

// then()の引数で処理する場合
new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject();
    }, 1000);
})
    .then(
        function () {
            console.log("resolve");
        },
        function () {
            console.log("reject");
        }
    );

// catchを使う場合
new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject();
    }, 1000);
})
    .then(function () {
        console.log("resolve1");
    })
    .then(function () {
        console.log("resolve2");
    })
    .catch(function () {
        console.log("catch");
    })

// 両方を組み合わせた場合(ついでにreject()へ引数を書いてみる)
new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject("エラー");
    }, 1000);
})
    .then(
        function () { console.log("resolve1"); },
        function (arg) { console.log(arg, "reject1"); },
    )
    .then(
        function () { console.log("resolve2"); },
        function (arg) { console.log(arg, "reject2"); },
    )
    .catch(function () {
        console.log("catch"); // 到達しないコード
    })