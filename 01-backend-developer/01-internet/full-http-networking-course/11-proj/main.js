const { crawlPage } = require('./crawl.js')
const { printReport } = require('./report.js')

// test command: npm run start https://wagslane.dev
async function main() {
    // 最初の引数はプログラムの名前
    // 2番目の引数はコードまたはエントリポイントファイルの名前
    // そのため、3という数値が出てくる
    if (process.argv.length < 3) {
        console.log("no website provided");
        process.exit(1);
    }

    if (process.argv.length > 3) {
        console.log("too many command line args");
        process.exit(1);
    }
    const baseURL = process.argv[2];

    console.log(`starting crawl of ${baseURL}`);

    // クロールの出発点としての呼び出しのため、currentURLもbaseURLと一致する
    const pages = await crawlPage(baseURL, baseURL, {});
    printReport(pages);
}

main()

// todo
// utの追加
// webクローラーの機能強化
//  - csvやexcelフォーマットでの出力
//  - 入力をコンソールではなく、ブラウザからできるようにする