// その他の静的メソッドについて見ていく
const timer = (time, type) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (type === "resolve") resolve(`${time} 解決`);
        if (type === "reject") reject(`${time} 拒否`)
    }, time)
});

// .allSettled() 全て終了（resolveかrejectに関わらず）
// Promise.allSettled(
//     [
//         timer(500, "resolve"),
//         timer(600, "reject"),
//         timer(700, "resolve"),
//         timer(800, "reject")
//     ]
// )
//     .then(
//         val => console.log("OK", val),
//         val => console.log("NG", val)
//     )

// .any() resolve case 最初の解決が送られる（下記例では800)
// Promise.any(
//     [
//         timer(500, "reject"),
//         timer(600, "resolve"),
//         timer(700, "resolve"),
//         800
//     ]
// )
//     .then(
//         val => console.log("OK", val),
//         val => console.log("NG", val)
//     )

// .any() reject case 全てrejectならAggregateError
// Promise.any(
//     [
//         timer(500, "reject"),
//         timer(600, "reject"),
//         timer(700, "reject"),
//         timer(800, "reject"),
//     ]
// )
//     .then(
//         val => console.log("OK", val),
//         val => console.log("NG", val)
//     )

// .race() resolve case 最初の１つがresolve->最初に解決したPromiseの値が送られる
// Promise.race(
//     [
//         timer(500, "resolve"),
//         timer(600, "reject")
//     ]
// )
//     .then(
//         val => console.log("OK", val),
//         val => console.log("NG", val)
//     )

// .race() reject case 最初の１つがreject->最初に拒否したPromiseの値が送られる
Promise.race(
    [
        timer(500, "reject"),
        timer(600, "resolve")
    ]
)
    .then(
        val => console.log("OK", val),
        val => console.log("NG", val)
    )

// 全て成功の場合のみ後続処理を実行したい、処理の正否に関わらず進めたい、など
// その都度ニーズに合わせてメソッドを選択する。