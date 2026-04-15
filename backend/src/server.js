const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Live stocks proxy route
const livestocksController = require("./controller/livestocks.controller");
app.use("/api/live-stocks", livestocksController);

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 6334;
app.listen(PORT, () => {
    console.log(`✅ Backend running at http://localhost:${PORT}`);
});
