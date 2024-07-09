// ブラウザで任意のページを開き、開発者ツールのコンソールから以下コードを実行する
fetch(location.href).then(response => {
    if (!response.ok) return "";
    return response.text();
}).then(text => {
    console.log(text.replace(/>/g, ">¥n"));
});

// location.href とは
// text.replace(/>/g, ">¥n")とは

// async, awaitを使って書き換える
(async function () {
    const response = await fetch(location.href);
    if (!response.ok) return "";
    const text = await response.text();
    console.log(text.replace(/>/g, ">¥n"));
}
)();