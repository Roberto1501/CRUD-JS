/* -- Criar uma variavel global para armazenar a lista de contatos

-- Criar uma função para adicionar um novo contato. Essa função deverá ser executada ao clique de um botão no html.

-- Todo contato deverá ter id, nome e telefone. O identificador do contato deve ser único (não pode repetir) assim como o telefone informado. Antes de adicionar na lista deve ser verificado se o telefone já foi cadastrado anteriormente. Se já existir, informar ao usuario "Este telefone já foi cadastrado" e não adiciona-lo na lista

-- Criar uma função para listar todos os contatos cadastrados. Essa função deverá ser executada ao clique de um botão no html.

-- Criar uma função para atualizar um contato existente na lista. Essa função deverá ser executada ao clique de um botão no html. O usuário deverá informar o id que será atualizado e os novos dados de nome e telefone para este registro. Se o id não existir, a lista não deverá sofrer modificações.

-- Criar uma função para deletar um contato existente na lista. Essa função deverá ser executada ao clique de um botão no html. O usuário deverá informar o id que será deletado. Se o id não existir, a lista não deverá sofrer modificações.
*/

let contato = []

function addContatos() {
    let name = prompt('Digite o nome: ')
    let number = prompt('Digite o número')
    busca = contato.some((valor) => valor.telefone == number)
    if (busca === true) {
        return alert('Contato ja existente')

    } else {
        let identificador =parseInt(Math.random()*100) 
        let novoObj = {
            id: identificador,
            nome: name,
            telefone: number
        }



        contato.push(novoObj)
    }




}

function mostarContatos() {
    console.log(contato)
}

function atualizar() {
    nIndentificador = prompt('Digite o id: ')
    let existeId = contato.findIndex((valorId) => valorId.id == nIndentificador)
    if (existeId !== -1) {
        let newNome = prompt('Digite o novo Nome: ')
        let newNumber = prompt('Digite o novo numero:')

        const contatoAtualizado = {
            id: nIndentificador,
            nome: newNome,
            telefone: newNumber
        }

        contato[existeId] = contatoAtualizado

    } else{
        alert('Id não existe por favor digite id correto')
    }


}


function deletar() {
    nIndentificador1 = prompt('Digite o id: ')
    let existeId1 = contato.findIndex((valorId) => valorId.id == nIndentificador1)
    if (existeId1 !== -1) {
        contato.splice(existeId1,1)
        
        

    } else{
        alert('Id não existe por favor digite id correto')
    }


}



