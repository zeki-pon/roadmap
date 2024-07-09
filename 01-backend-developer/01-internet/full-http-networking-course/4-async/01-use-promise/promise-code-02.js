// Promiseオブジェクトを返す関数を作成しアロー関数で記述したことで、01のコードよりも見通しが良くなった
const timer = (time, text) => new Promise(resolve => {
    setTimeout(() => {
        console.log(text);
        resolve();
    }, time)
});

timer(500, "処理1")
    .then(() => timer(600, "処理2"))
    .then(() => timer(700, "処理3"))
    .then(() => timer(800, "処理4"))
    .then(() => console.log("終了"));