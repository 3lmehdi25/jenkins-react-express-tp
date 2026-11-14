
const express = require("express");

const app = express();

app.use(express.json());

const tasks = [
    { id: 1, title: "Learn Jenkins" },
    { id: 2, title: "Learn Docker" },
    { id: 3, title: "Build React application" }
];

app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Express backend is running"
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
