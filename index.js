const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_vivo',
});

db.connect((err) => {
  if (err) {
    console.error("Houve um erro de conexão: "+ err.message);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

// Define endpoints de API para operações de crud de acoes judiciais

app.post('/api/acoes', (req, res) => {
  const { cpf_cnpj, nome, status_id } = req.body;
  const query = 'INSERT INTO acao_judicial (cpf_cnpj, nome, status_id) VALUES (?, ?, ?)';
  db.query(query, [cpf_cnpj, nome, status_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('erro ao adicionar ação judicial');
    } else {
      res.status(201).send('Ação adicionada!');
    }
  });
});

app.get('/api/acoes', (req, res) => {
  const query = 'SELECT * FROM acao_judicial';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao obter uma ação judicial');
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/api/acoes/:cpf_cnpj', (req, res) => {
  const { cpf_cnpj } = req.params;
  const query = 'SELECT A.cpf_cnpj, A.nome, B.descricao from acao_judicial A inner join  status_pessoa B on A.status_id = b.status_id WHERE A.cpf_cnpj=?';
  db.query(query, [cpf_cnpj], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao obter uma ação judicial por cpf ou cnpj!');
    } else {
      res.status(200).json(results);
    }
  });
});



app.put('/api/acoes/:cpf_cnpj', (req, res) => {
  const { cpf_cnpj } = req.params;
  const { nome, status_id } = req.body;
  const query = 'UPDATE acao_judicial SET nome=?, status_id=? WHERE cpf_cnpj=?';
  db.query(query, [nome, status_id, cpf_cnpj], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao atualizar a ação judicial ');
    } else {
      res.status(200).send('Ação atualizada!');
    }
  });
});

app.delete('/api/acoes/:cpf_cnpj', (req, res) => {
  const { cpf_cnpj } = req.params;
  const query = 'DELETE FROM acao_judicial WHERE cpf_cnpj=?';
  db.query(query, [cpf_cnpj], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao deletar a ação!');
    } else {
      res.status(200).send('Ação deletada!');
    }
  });
});

// Define endpoints de API para operações de crud de status de pessoa



app.get('/api/status', (req, res) => {
  const query = 'SELECT * FROM status_pessoa';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao obter uma ação judicial');
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/api/status/:status_id', (req, res) => {
  const { status_id } = req.params;
  const query = 'SELECT * FROM status_pessoa WHERE status_id=?';
  db.query(query, [status_id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao obter uma ação judicial por cpf ou cnpj!');
    } else {
      res.status(200).json(results);
    }
  });
});



app.listen(port, () => {
  console.log(`Servidor está rodando na porta: ${port}`);
});
