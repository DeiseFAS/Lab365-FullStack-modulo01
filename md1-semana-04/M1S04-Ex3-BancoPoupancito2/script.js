class Conta {
    constructor(saldoInicial, senha) {
      this.saldo = saldoInicial;
      this.senha = senha;
    }
  
    deposito(valor, senha) {
      if (this.senha !== senha) {
        console.log('Senha incorreta');
        return;
      }
  
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }
  
    retirada(valor, senha) {
      if (this.senha !== senha) {
        console.log('Senha incorreta');
        return;
      }
  
      if (this.saldo < valor) {
        console.log('Saldo insuficiente');
        return;
      }
  
      this.saldo -= valor;
      console.log(`Retirada de R$${valor} realizada. Novo saldo: R$${this.saldo}`);
    }
  }
  
  class ContaPoupanca extends Conta {
    atualizaJuros() {
      const juros = this.saldo * 0.007;
      this.saldo += juros;
      console.log(`Juros de R$${juros.toFixed(2)} atualizados. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }
  }
  
  // Exemplo de uso das operações
  const contaPoupanca = new ContaPoupanca(1000, '1234');
  contaPoupanca.deposito(500, '1234');
  contaPoupanca.retirada(200, '1234');
  contaPoupanca.atualizaJuros();