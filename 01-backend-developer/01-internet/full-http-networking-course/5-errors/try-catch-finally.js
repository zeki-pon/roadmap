function getMonthName(mo) {
    mo = mo - 1; // 月の数字を配列のインデックスに合わせる (1 = Jan, 12 = Dec)
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    if (months[mo]) {
        return months[mo];
    } else {
        throw "InvalidMonthNo"; // throw キーワードが使われている
    }
}

try {
    monthName = getMonthName(13);
} catch (e) {
    monthName = "unknown";
    console.error(e);
} finally {
    console.log("finish");
}