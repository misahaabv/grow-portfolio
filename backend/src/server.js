const express = require("express");
const cors = require("cors");
const connect = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// Live stocks proxy route
const livestocksController = require("./controller/livestocks.controller");
app.use("/api/live-stocks", livestocksController);

const PORT = 6334;
app.listen(PORT, async () => {
    await connect();
    console.log(`✅ Backend running at http://localhost:${PORT}`);
});
