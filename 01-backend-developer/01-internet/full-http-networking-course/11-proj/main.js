const { crawlPage } = require('./crawl.js')

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

    for (const page of Object.entries(pages)) {
        console.log(page);
    }
}

main()