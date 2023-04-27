class CaixaRegistradora {
    constructor() {
      this.estoque = [];
      this.cliente = '';
      this.itens = {};
      this.total = 0;
    }
  
    adicionarProduto(codigoBarra, preco, nome) {
      const produto = { codigoBarra, preco, nome };
      this.estoque.push(produto);
    }
  
    iniciarAtendimento(cliente) {
      this.cliente = cliente;
      console.log(`Iniciando atendimento para ${cliente}`);
    }
  
    adicionarItem(codigoBarra, quantidade) {
      const produto = this.estoque.find(p => p.codigoBarra === codigoBarra);
      if (produto) {
        if (!this.itens[codigoBarra]) {
          this.itens[codigoBarra] = { quantidade, preco: produto.preco };
        } else {
          this.itens[codigoBarra].quantidade += quantidade;
        }
        console.log(`${quantidade} unidades do produto ${produto.nome} adicionadas à conta.`);
      } else {
        console.log(`Produto com código de barras ${codigoBarra} não encontrado.`);
      }
    }
  
    calcularTotal() {
      this.total = Object.values(this.itens)
        .reduce((acc, curr) => acc + (curr.quantidade * curr.preco), 0);
      console.log(`Total da conta de ${this.cliente}: R$${this.total.toFixed(2)}`);
    }
  
    fecharConta(dinheiro) {
      const troco = dinheiro - this.total;
      console.log(`Valor recebido: R$${dinheiro.toFixed(2)}. Troco: R$${troco.toFixed(2)}.`);
      this.estoque = [];
      this.cliente = '';
      this.itens = {};
      this.total = 0;
    }
  }
  
  // Exemplo de uso da classe
  const caixa = new CaixaRegistradora();
  
  caixa.adicionarProduto(123, 2.99, 'Pão');
  caixa.adicionarProduto(456, 4.99, 'Rosquinha');
  caixa.adicionarProduto(789, 7.99, 'Suco');
  
  caixa.iniciarAtendimento('João');
  caixa.adicionarItem(123, 2);
  caixa.adicionarItem(456, 1);
  caixa.adicionarItem(789, 3);
  caixa.calcularTotal();
  caixa.fecharConta(50);