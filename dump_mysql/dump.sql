CREATE DATABASE crud_vivo;
USE crud_vivo;

CREATE TABLE status_pessoa (
    status_id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL
);

CREATE TABLE acao_judicial (
  cpf_cnpj VARCHAR(14) PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  status_id INT,
  FOREIGN KEY (status_id) REFERENCES status_pessoa(status_id)
);

INSERT INTO status_pessoa (descricao) VALUES("Reu");
INSERT INTO status_pessoa (descricao) VALUES("Autor");
INSERT INTO status_pessoa (descricao) VALUES("Terceiro Prejudicado"); 

/* caso a execução do banco de dados local não permita a conexão com o server do projeto, 
   executar o comando abaixo para liberar a conexão */

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua_senha';
flush privileges;