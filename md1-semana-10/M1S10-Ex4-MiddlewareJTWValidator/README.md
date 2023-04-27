[M1S10] Ex 4 - Middleware JTW Validator

Para garantir a segurança da aplicação, implemente um middleware que valide se o token recebido é válido. Esse middleware será responsável por verificar se o token foi gerado corretamente e se ainda está válido.

Além disso, é importante definir que todas as rotas da aplicação, exceto a rota raiz e a rota de sessão, devem ser privadas. Isso significa que apenas usuários autenticados, ou seja, aqueles que possuem um token válido, terão acesso a essas rotas.
