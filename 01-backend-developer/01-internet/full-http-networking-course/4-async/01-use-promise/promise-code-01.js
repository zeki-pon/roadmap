// 各処理ごとにPromiseオブジェクトをベタ書きで記述
// 長ったらしくて読みにくいコード
new Promise(function (resolve) {
    setTimeout(function () {
        console.log("処理1");
        resolve();
    }, 500);
})
    .then(function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                console.log("処理2");
                resolve();
            }, 600);
        });
    })
    .then(function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                console.log("処理3");
                resolve();
            }, 700);
        });
    })
    .then(function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                console.log("処理4");
                resolve();
            }, 800);
        });
    })
    .then(function () {
        return console.log("終了");
    })