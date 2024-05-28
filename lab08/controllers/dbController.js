const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'db_cursos',
  user: 'postgres',
  password: '95123'
});

client.connect()
  .then(() => console.log('Conectado ao banco de dados PostgreSQL'))
  .catch(err => console.error('Erro ao conectar:', err));

// Exporte a conexão para uso em outros arquivos
module.exports = client;