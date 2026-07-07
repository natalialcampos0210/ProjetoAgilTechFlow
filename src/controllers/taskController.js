const tasks = require("../models/taskModel");

// Listar tarefas
const getTasks = (req, res) => {
    try {
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({
            message: "Erro interno do servidor."
        });
    }
};

// Criar tarefa
const createTask = (req, res) => {
    try {
        const { title } = req.body;

        if (!title || title.trim() === "") {
            return res.status(400).json({
                message: "O título da tarefa é obrigatório."
            });
        }

        const newTask = {
            id: tasks.length + 1,
            title: title.trim(),
            completed: false
        };

        tasks.push(newTask);

        return res.status(201).json(newTask);

    } catch (error) {
        return res.status(500).json({
            message: "Erro interno do servidor."
        });
    }
};

module.exports = {
    getTasks,
    createTask
};
// Teste 