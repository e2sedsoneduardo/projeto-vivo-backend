## CRUD AÇÃO JUDICIAL - BACKEND

Projeto de teste, com o intuito de avaliação no processo seletivo.

O Objetivo deste projeto é montar um crud contemplando as 4 operações básicas, evidenciando o skill técnico e cumprindo o requisito para o teste do processo seletivo.

A funcionalidadde trata de um cenário onde os CPFs e CNPJs relacionados em uma Ação Judicial serão identificados nesta entidade com o Número do CPF ou CNPJ como chave de pesquisa, Nome e qual o papel dele na Ação Judicial entre as opções:
1 - Réu
2 - Autor 
3 - Terceiro Prejudicado 

O domínio destes códigos estara na tabela de apoio status_pessoa
---

## REQUISITOS

Para fins didáticos e não abordando nenhuma solução arquitetural específica, estou contemplando o seguinte cenário para essa prova de conceito:

1 - Uma execução do MySQL Server local;
2 - npm e node.js devidamente configurados em uma estação de trabalho Windows.


---

## PARA RODAR O PROJETO LOCAL DO ZERO:

1 -  Instalar o MySQL Server no computador (MySQL Community Installer) através do link abaixo (considerando que você já tenha uma conta oracle criada):
https://dev.mysql.com/downloads/installer/

2 - Após a instalação, fazer a configuração do banco de dados via IDE como o MySQL Workbench ou mesmo via terminal

3 - Rodar o script "dump.sql", inserido na pasta "dump_sql" no root desse projeto, via terminal ou via alguma IDE, como o MySQL Workbench

4 - Instalar o npm (Gerenciador de Pacotes do Node - Node Package Manager) e o node, conforme documentação abaixo:
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

5 - Rodar os seguintes comandos dentro da raiz do projeto "projeto-vivo-backend":
**npm init** (para inciar o projeto)
**npm install express mysql body-parser cors** (para instalar o express para montar a nossa estrutura do middleware, cors para permitir requisições de múltiplas origens, biblioteca de conexão com o mysql e o body-parser para converter o body da requisição para vários formatos)
finalmente, rodar o comando para subir o servidor
**node index.js** onde no arquivo index.js está toda a nossa estrutura do nosso crud.

        5.1 - Ponto de observação: no nosso cenário simples, estamos passando a estrutura para conexão de banco de dados de forma hardcoded:
        
        ```
        const db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'sua senha',
            database: 'seu database',
        });
        ```

        Porém importante ressaltar que em um cenário produtivo, credenciais como essas devem estar fora do código-fonte, sendo guardadas e protegidas por algum mecanismo de guarda de credenciais, como por exemplo o AWS Secrets Manager, o SSM Parameter Store, ou mesmo referenciado por variáveis de ambiente vindas de uma esteira CI/CD, dentre outras abordagens. Usando essa abordagem em algumas plataformas FaaS, como o AWS Lambda, aumenta consideravelmente o tempo de runtime, sendo recomendado o carregamento dessas credenciais fora do handler principal da função.



--- 


