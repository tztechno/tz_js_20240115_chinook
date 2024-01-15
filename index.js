const sqlite3 = require('sqlite3').verbose();

// データベースファイルのパス
const dbPath = './chinook.db';

// データベースオブジェクトの作成
const db = new sqlite3.Database(dbPath);

// SQLクエリの実行
const query = 'SELECT * FROM artists';

db.all(query, (err, rows) => {
    if (err) {
        console.error(err.message);
        return;
    }

    // 結果の表示
    rows.forEach((row) => {
        console.log(`${row.ArtistId} - ${row.Name}`);
    });

    // データベース接続のクローズ
    db.close();
});
