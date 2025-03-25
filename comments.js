// Create web server

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rota de exemplo para lidar com comentários
app.get('/comments', (req, res) => {
    res.json({ message: 'Lista de comentários' });
});

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    if (!comment) {
        return res.status(400).json({ error: 'Comentário é obrigatório' });
    }
    res.status(201).json({ message: 'Comentário criado', comment });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
