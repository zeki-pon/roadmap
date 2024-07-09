// 特定の型の式だけでなく、あらゆる式を投げることができる。

// throw "Error2"; // string
// throw 42; // number
// throw true; // boolean
// throw {
//     toString: () => "this is object"
// };

// UserExceptionというオブジェクト型を作成
function UserException(message) {
    this.message = message;
}
// 文字列として資料される時に例外を整形する
UserException.prototype.toString = () => `${this.name}: "${this.message}"`;
// UserException のインスタンスを作成し、投げる
throw new UserException("Value too high");