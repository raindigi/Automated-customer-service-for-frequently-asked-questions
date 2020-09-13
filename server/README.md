# SAC Automatizado para perguntas frequentes
Um simples projeto de automação para perguntas frequentes.

# Recursos disponíveis

| Rota                           | Método HTTP | Parâmetros                                                          |
|--------------------------------|-------------|---------------------------------------------------------------------|
| http://localhost:3333/chat     | PUT         | BODY: {<br>"old_question":"",<br>"question":"",<br>"answer":""<br>} |
| http://localhost:3333/chat     | POST        | BODY: {<br>"question":"",<br>"answer": ""<br>}                      |
| http://localhost:3333/chat     | DELETE      | BODY: { "question": ""}                                             |
| http://localhost:3333/chat/ask | POST        | BODY: { "question": ""}                                             |

# Como executar o projeto em meu computador

- Crie no docker uma instância MONGO

<pre> docker run --name some-mongo -p 27017:27017 -d mongo</pre>

**Configure o arquivo ormconfig.json.example com os dados que foram gerados anteriormente. Em seguida remova o .example do nome do arquivo.**

**Dentro da instância MONGO crie uma database com o mesmo nome que foi configurado no ormconfig.json**


- Instale todas as dependências

<pre>yarn install</pre>


- Execute o servidor

<pre>yarn dev:server</pre>

## Como testar a aplicação

Instale o [Insomnia](https://insomnia.rest/) em seu computador

Entre na pasta insomnia e importe o arquivo "chat-automatizado.json"
