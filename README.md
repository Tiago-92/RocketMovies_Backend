# RocketMovies_backend

- Nessa aplicação o usuário pode adicionar, remover, e atualizar descrições de filmes e tags relacionadas ao gênero do filme, por exemplo: ação, ficção científica, comédia, etc.

- É possível criar uma conta para autenticação de usuário.

- A API foi desenvolvia em Node.js, as rotas e requisições Rest com o Express + Insomnia e o banco de dados com SQLite + Knex.js.

- O Front-end foi desenvolvido em React + styled-componentes e está em outro repósitório: RocketMovies_frontend; 

Algumas funcionalidades da API:
- Autenticação de usuário com middleware e JWT;
- Criptografia de senha com bcryptjs;
- Criação de tabelas no banco de dados com o query builder Knex.js;
- Upload do avatar do usuário com o Middleware Multer.

