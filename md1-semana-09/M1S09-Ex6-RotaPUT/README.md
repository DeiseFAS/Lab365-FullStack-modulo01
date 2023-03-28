[M1S09] Ex 6 - Rota PUT

A rota PUT é outra funcionalidade importante que deve ser implementada na API do projeto Trindade Places. Essa rota permite que os usuários atualizem as informações de uma instituição pública específica na base de dados.

Para implementar a rota PUT, é preciso definir um identificador único para cada instituição, que será utilizado na requisição de atualização. Além disso, é necessário definir quais campos da instituição poderão ser atualizados pelos usuários.

A rota PUT pode ser implementada com o path /places/:id, onde o parâmetro :id representa o identificador único da instituição. Ao receber uma requisição PUT com esse path, a API deve verificar se o identificador corresponde a uma instituição válida na base de dados e, em caso positivo, permitir a atualização dos campos definidos.

A rota permitirá atualiza todos os campos cadastrados, exceto o ID

image.png



Docente: Douglas Cavalcante

Status do exercício: Aguardando atualização com a resolução do exercício.s