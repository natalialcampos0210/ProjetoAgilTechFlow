const express = require("express");
const router = express.Router();

console.log("ROTAS CARREGADAS!");

router.get("/", (req, res) => {
    console.log("GET EXECUTADO");
    res.json([]);
});

router.post("/", (req, res) => {
    console.log("POST EXECUTADO");
    res.status(201).json({
        message: "Funcionou!",
        body: req.body
    });
});

module.exports = router;