// Promise.all()のサンプルコード
const timer = (time, type) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (type === "resolve") resolve(`${time} 解決`);
        if (type === "reject") reject(`${time} 拒否`)
    }, time)
});

const array = [
    timer(500, "resolve"),
    timer(600, "resolve"),
    timer(700, "resolve"),
    timer(800, "resolve")
];
const array2 = [ // Promiseとそうでない要素を混ぜてもOK。そうでない要素は解決とみなされる。
    500,
    600,
    700,
    timer(800, "resolve")
];
const array3 = [
    timer(500, "resolve"),
    timer(600, "reject"),  // ここで終了する
    timer(700, "resolve"),
    timer(800, "reject")
];

// 全て解決したら実行する
// Promise.all(array)
//     .then(
//         res => console.log(res)
//     );

// Prosemeオブジェクト以外の要素が配列に含まれる場合
// Promise.all(array2)
//     .then(res => console.log(res));

// rejectが含まれる場合
// Promise.all(array3)
//     .then(
//         res => console.log(res),
//         res => console.log(res),
//     );

// asyncやawaitを組み合わせた場合 --全てresolve
(async () => {
    const res = await Promise.all(array);
    console.log("res:", res);
})();

// asyncやawaitを組み合わせた場合 --reject含む
(async () => {
    try {
        const res = await Promise.all(array3);
        console.log("res:", res);
    } catch (e) {
        console.log("error:", e);
    }
})();