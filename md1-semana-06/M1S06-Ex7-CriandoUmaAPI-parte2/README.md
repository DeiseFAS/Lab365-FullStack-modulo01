[M1S06] Ex 7 - Criando uma API (parte 2)

Agora continuando o exercício anterior no módulo de controlador siga as seguintes regras de negócio de cada rota:

Envio de um novo usuário:

O objeto a ser enviado no corpo da requisição para controlador deve seguir o seguinte formato :

{
  "nome":"Fulano",
  "idade":18,
  "cargo":"junior"
  "senha":"12345678"
}

O método HTTP será o post com a rota da sua escolha;

Caso o usuário tenha idade menor que 21 anos não deverá prosseguir com a requisição, então retorne o objeto {“mensagem”: “Usuário não possui idade suficiente”};

Caso na requisição não seja enviado nada no seu corpo retorne com status 406 com o objeto {“mensagem”: “Está faltando dados para concluir a operação”};

Caso a operação seja um sucesso, retorne com status 200 o objeto {“mensagem”: “Criado com sucesso”};

Deletar o usuário:

Deverá ser passado na URL da requisição um id;

Verifique na url se o id é passado, caso contrário retorne com status 406 com o objeto {“mensagem”: “Está faltando dados para concluir a operação”};

Caso a operação seja um sucesso, retorne com status 200 o objeto {“mensagem”: “Deletado com sucesso”};

OBS: lembre de alterar os dados para que passe em todos os testes e sua API esteja 100%.

Docente: Rayane Cristina Oliveira Silva

Exercicio 6, 7 e 8.