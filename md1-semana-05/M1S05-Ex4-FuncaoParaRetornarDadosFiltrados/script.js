const usuarios = [
    {nome: "luis", idade: 26},
    {nome: "norma", idade: 16},
    {nome: "daiana", idade: 26},
    {nome: "jorge", idade: 16},
    {nome: "kauan", idade: 16},
    {nome: "charles", idade: 26},
    {nome: "marco", idade: 16},
    {nome: "bruno", idade: 16}
  ];
  
  function filtrarUsuariosPorIdade(idadeMinima) {
    return usuarios.filter(usuario => usuario.idade >= idadeMinima);
  }
  
  const usuariosMenoresDe18 = filtrarUsuariosPorIdade(18);
  const usuariosMaioresOuIguaisA18 = filtrarUsuariosPorIdade(19);
  
  console.log("Usuários com menos de 18 anos:");
  console.log(usuariosMenoresDe18);
  
  console.log("Usuários com 18 anos ou mais:");
  console.log(usuariosMaioresOuIguaisA18);