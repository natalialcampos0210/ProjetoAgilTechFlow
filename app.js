const express = require("express");

const app = express();
console.log("APP CARREGADO!");

app.use(express.json());

const taskRoutes = require("./src/routes/taskRoutes");

app.use("/tasks", taskRoutes);

module.exports = app;