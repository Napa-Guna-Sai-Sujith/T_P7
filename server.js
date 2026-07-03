const express = require("express");
const cors = require("cors");

const app = express();

require("./config/db");

app.use(cors());
app.use(express.json());

app.use("/doctor", require("./routes/doctor"));
app.use("/patient", require("./routes/patient"));
app.use("/staff", require("./routes/staff"));

app.get("/", (req, res) => {
    res.send("🏥 Hospital API Running Successfully");
});

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});