class Produto {
    constructor(codigo, nome, preco, quantidade) {
      this.codigo = codigo;
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  }

  class Estoque {
    constructor() {
      // Verifica se já existe algum estoque salvo no localStorage
      let produtos = JSON.parse(localStorage.getItem('produtos'));
      if (produtos == null) {
        produtos = [];
      }
      this.produtos = produtos;
    }
  
    adicionarProduto(codigo, nome, preco, quantidade) {
      // Verifica se o produto já existe no estoque
      const produtoExistente = this.produtos.find(
        (produto) => produto.codigo === codigo
      );
  
      if (produtoExistente) {
        // Se o produto já existe, atualiza a quantidade
        produtoExistente.quantidade += quantidade;
      } else {
        // Se o produto não existe, cria um novo produto e adiciona ao estoque
        const novoProduto = new Produto(codigo, nome, preco, quantidade);
        this.produtos.push(novoProduto);
      }
  
      // Salva os produtos no localStorage
      localStorage.setItem('produtos', JSON.stringify(this.produtos));
    }
  
    removerProduto(codigo, quantidade) {
      // Busca o produto pelo código
      const produto = this.produtos.find((produto) => produto.codigo === codigo);
  
      // Verifica se o produto existe e tem a quantidade desejada
      if (produto && produto.quantidade >= quantidade) {
        // Atualiza a quantidade do produto
        produto.quantidade -= quantidade;
  
        // Se a quantidade do produto for zero, remove o produto do estoque
        if (produto.quantidade === 0) {
          const index = this.produtos.indexOf(produto);
          this.produtos.splice(index, 1);
        }
  
        // Salva os produtos no localStorage
        localStorage.setItem('produtos', JSON.stringify(this.produtos));
        return true;
      } else {
        return false;
      }
    }
  
    listarProdutos() {
      // Retorna uma cópia dos produtos para evitar modificações indevidas
      return this.produtos.slice();
    }
  }
  class Carrinho {
    constructor() {
      // Cria um novo estoque
      this.estoque = new Estoque();
  
      // Cria um novo carrinho vazio
      this.produtos = [];
    }
  
    adicionarProduto(codigo, quantidade) {
      // Busca o produto pelo código no estoque
      const produto = this.estoque.produtos.find(
        (produto) => produto.codigo === codigo
      );
  
      // Verifica se o produto existe e tem a quantidade desejada
      if (produto && produto.quantidade >= quantidade) {
        // Adiciona o produto ao carrinho
        const produtoCarrinho = new Produto(
          produto.codigo,
          produto.nome,
          produto.preco,
          quantidade
        );
        this.produtos.push(produtoCarrinho);
  
        // Remove a quantidade do produto do