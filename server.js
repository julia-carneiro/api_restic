const express = require('express');
const { create, update, remove, findAll } = require('./repositories/vagasRepository');

const app = express();
const port = 3000;  

//Cria vaga
app.post('/vagas', (req, res) => {
    const { descricao, titulo, dataCadastro, telefone, empresa } = req.body;
    const vaga = create({ descricao, titulo, dataCadastro, telefone, empresa });
    res.status(201).json(vaga);
});

//Get vaga
app.get('/vagas', (req, res) => {
    const vagas = findAll();
    res.json(vagas);
});

//Atualizar
app.put('/vagas/:id', (req, res) => {
    const { id } = req.params;
    const { descricao, titulo, dataCadastro, telefone, empresa } = req.body;
    const vaga = update(id, { descricao, titulo, dataCadastro, telefone, empresa });
    res.json(vaga);
});

//Deletar
app.delete('/vagas/:id', (req, res) => {
    const { id } = req.params;
    remove(id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});