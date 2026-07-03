const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sai@2006",
    database: "hospital2"
});

db.connect((err) => {
    if (err) {
        console.log("❌ DB Connection Failed");
        console.log(err);
    } else {
        console.log("✅ MySQL Connected Successfully");
    }
});

module.exports = db;