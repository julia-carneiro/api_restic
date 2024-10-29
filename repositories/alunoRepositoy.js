const {v4: uuidv4} = require('uuid')

let alunos = [];

//Cria um aluno 
//Para testar no postman basta enviar no body um json constando os parâmetro abaixo 
function create({nome, email, nome_curso}){
    const aluno = {
        id: uuidv4(),
        nome,
        email, 
        nome_curso
    };
    alunos.push(aluno);
    return aluno;
};

/*
Edita um aluno já existente 
- Para testar no postman, é preciso pegar o id de um aluno, adicionar a URL e enviar num body um json com as informações alteradas
Exemplo:
PUT - http://localhost:3000/alunos/94d3bb14-00af-4255-807d-711e4100dfd5
No body:
{
    "nome": "Aluno editado",
    "email": "email@email",
    "nome_curso": "ecomp"
}
*/
function update(id, {nome, email, nome_curso}){
    const index = alunos.findIndex(aluno => aluno.id === id);
    if(index === -1){
        return null;
    }
    alunos[index] = {
        id,
        nome,
        email, 
        nome_curso
    };
    return alunos[index];
};

/*
Edita um aluno já existente 
- Para testar no postman, é preciso pegar o id de um aluno e adicionar a URL 
Exemplo:
DELETE - http://localhost:3000/alunos/94d3bb14-00af-4255-807d-711e4100dfd5
*/
function remove(id){
    const index = alunos.findIndex(aluno => aluno.id === id);
    if(index === -1){
        return false;
    }

    alunos.splice(index, 1);
    return true;
};


function findAlunos(id = null) {
    if (id === null) {
        return alunos; // Retorna todos os alunos se id não for fornecido
    }
    
    const aluno = alunos.find(aluno => aluno.id === id);
    return aluno || null; // Retorna o aluno encontrado ou null se não existir
}


module.exports = {
    create,
    update, 
    remove, 
    findAlunos
};