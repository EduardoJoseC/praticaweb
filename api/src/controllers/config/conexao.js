const mysql = require('mysql');
const environment = "development";
const config = require("../config/config.js")[environment];

const con = mysql.createConnection({
    host: config.database.host, // O host do banco. Ex: localhost
    user: config.database.user, // Um usuário do banco. Ex: user 
    password: config.database.password, // A senha do usuário. Ex: user123
    database: config.database.database // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro ao conectar...', err)
        return
    }
    console.log('Conexao Realizada!')
})

//criando base de dados para cadastro
/*con.query('CREATE DATABASE atividade', (err,rows) => {
    if(err) throw err
    console.log("Data Base Criado com Sucesso");
})*/

//acessando a base de dados para criação da tabela e inserção de dados
con.query('USE atividade', (err,rows) => {
    if(err) throw err
    console.log("Conectado ao Banco Atividade");
})

//Criação da Tabela no phpMyAdmin
/*CREATE TABLE IF NOT EXISTS `cadastro` (
    codigo int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    nome varchar(255) NOT NULL,
    ativo BOOLEAN DEFAULT false
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;*/


//const cadastro = {nome:'Eduardo', email: 'edu@bol.com.br', ativo:0 }

/*con.query('INSERT INTO cadastro SET ? ', cadastro, (err,rows) => {
    if(err) throw err
    console.log("Registro salvo com sucesso");
})*/

//Listando para verificar o cadastro no terminal
con.query('select * from cadastro', (err,rows) => {
    if(err) throw err

    rows.forEach(row => {
        console.log(`${row.nome} - ${row.email}`);
    })
})

//editando o cadastro com o codigo escolhido
con.query('UPDATE cadastro SET nome = ?, email = ? where CODIGO = ? ', ['Carneiro','carneiro.jose@uol.com.br','3'], (err,rows) => {
    if(err) throw err
    console.log("Registro Atualizado com sucesso");
})

//listando novamente afim de identificar a edição anterior
con.query('select * from cadastro', (err,rows) => {
    if(err) throw err

    rows.forEach(row => {
        console.log(`${row.nome} - ${row.email}`);
    })
})

//Deletando o cadastro com o codigo escolhido
con.query('DELETE FROM cadastro where CODIGO = ? ', ['4'], (err,resultado) => {
    if(err) throw err
    console.log(`Foram excluida(s) ${resultado.affectedRows} linha(s)`);

})

//Listando novamente para verificar via console se o cadastro foi excluído
con.query('select * from cadastro', (err,rows) => {
    if(err) throw err

    rows.forEach(row => {
        console.log(`${row.nome} - ${row.email}`);
    })
})

con.end((err) => {
    if(err) {
        console.log('Erro ao finalizar conexão...', err)
        return 
    }
    console.log('Conexão encerrada...')
})