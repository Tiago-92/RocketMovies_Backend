# RocketMovies_backend

- Nessa aplicação o usuário pode adicionar, listar e remover descrições de filmes e tags relacionadas ao gênero do filme, por exemplo: ação, ficção científica, comédia, etc.

- É possível criar uma conta para autenticação de usuário.

- A API foi desenvolvia em Node.js, as rotas e requisições Rest com o Express + Insomnia e o banco de dados com SQLite + Knex.js.

- O Front-end foi desenvolvido em React + styled-componentes e está em outro repósitório: [RocketMovies_frontend](https://github.com/Tiago-92/RocketMovies_frontend) 

Algumas funcionalidades da API:
- Autenticação de usuário com middleware e JWT;
- Criptografia de senha com bcryptjs;
- Criação de tabelas no banco de dados com o query builder Knex.js;
- Upload do avatar do usuário com o middleware Multer.

Deploy em: https://rocketmoviesapp.netlify.app

Para teste da aplicação:

- user1@user.com

- senha: user123

Rotas e requisições HTTP com o Insomnia:

![Captura de tela de 2022-09-15 13-08-38](https://user-images.githubusercontent.com/99975837/190456282-153ca657-d3b5-478e-8b87-07b808dbbb18.png)
