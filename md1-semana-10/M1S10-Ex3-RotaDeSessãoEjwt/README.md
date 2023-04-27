[M1S10] Ex 3 - Rota de sessão e jwt

Após criar a rota POST no exercício anterior, é necessário implementar uma rota do tipo POST com o path "/sessions" que receba um username e password.

Na rota POST com o path "/sessions", devem ser recebidos um username e password como parâmetros da requisição. Em seguida, a aplicação deve verificar se o usuário existe no banco de dados. Se o usuário existir, deve ser gerado um token JWT (JSON Web Token) contendo o id do usuário e injetado no corpo da resposta.

É importante garantir que o token seja gerado com segurança, seguindo as boas práticas de codificação e criptografia. Além disso, é importante que as informações sejam retornadas de forma clara e organizada para que a integração com outros sistemas ou aplicações seja facilitada.