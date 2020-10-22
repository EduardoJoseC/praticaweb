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

const agendamento = {nome:'Novo Nome', email: 'fujimail@uol.com.br', ativo:0 }

/*con.query('INSERT INTO agendamento SET ? ', agendamento, (err,rows) => {
    if(err) throw err
    console.log("Registro salvo com sucesso");
})*/

/*con.query('select * from agendamento', (err,rows) => {
    if(err) throw err
    console.log('Agendamentos', rows, '\n\n')
})*/

con.query('UPDATE agendamento SET nome = ?, email = ? where ID = ? ', ['Eduardo','eduardo.jose@uol.com.br','1'], (err,rows) => {
    if(err) throw err
    console.log("Registro Atualizado com sucesso");
})

con.query('DELETE FROM agendamento where ID = ? ', ['1'], (err,resultado) => {
    if(err) throw err
    console.log(`Foram excluida(s) ${resultado.affectedRows} linha(s)`);

})

con.query('select * from agendamento', (err,rows) => {
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