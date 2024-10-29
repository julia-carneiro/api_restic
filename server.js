const express = require('express');
const {create, update, remove, findAlunos} = require('./repositories/alunoRepositoy')
const app = express();
const port = 3000; 

app.use(express.json());

app.post('/alunos', (req, res) => {
    const { nome, email, nome_curso } = req.body;
    const aluno = create({nome, email, nome_curso})
    res.status(201).json(aluno); 
});

app.get('/alunos', (req, res) => {
    const allAlunos = findAlunos(); // Retorna todos os alunos
    res.json(allAlunos);
});

app.get('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const aluno = findAlunos(id); // Retorna o aluno com o id fornecido
    if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' }); 
    }
    res.json(aluno);
});

app.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, nome_curso }  = req.body;
    const aluno = update(id, { nome, email, nome_curso } );
    res.json(aluno);
});

app.delete('/alunos/:id', (req, res) => {
    const { id } = req.params;
    remove(id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
