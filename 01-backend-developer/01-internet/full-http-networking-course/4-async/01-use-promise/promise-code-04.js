// 03へrejectを組み込む
const timer = (time, type) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (type === "resolve") resolve(`${time} 解決`);
        if (type === "reject") reject(`${time} 拒否`)
    }, time)
});

(async function () {
    try {
        const res1 = await timer(500, "resolve");
        console.log(res1);

        const res2 = await timer(600, "reject");
        console.log(res2);

        const res3 = await timer(700, "resolve");
        console.log(res3);

    } catch (e) {
        console.log(e);
    } finally {
        console.log("終了");
    }
})();