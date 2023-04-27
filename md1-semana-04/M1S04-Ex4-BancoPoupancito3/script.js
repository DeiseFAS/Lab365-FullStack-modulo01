// Classe Conta
class Conta {
    constructor(saldo, senha) {
      this.saldo = saldo;
      this._senha = senha;
    }
  
    get senha() {
      return this._senha;
    }
  
    deposito(valor, senha) {
      if (senha === this._senha) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
      } else {
        console.log(`Senha incorreta!`);
      }
    }
  
    retirada(valor, senha) {
      if (senha === this._senha) {
        if (valor > this.saldo) {
          console.log(`Saldo insuficiente!`);
        } else {
          this.saldo -= valor;
          console.log(`Retirada de R$ ${valor} realizada com sucesso!`);
        }
      } else {
        console.log(`Senha incorreta!`);
      }
    }
  }
  
  // Classe ContaPoupança
  class ContaPoupanca extends Conta {
    atualizaJuros() {
      const juros = 0.007;
      const ganho = this.saldo * juros;
      this.saldo += ganho;
      console.log(`Juros atualizados! Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
  }
  
  // Classe PoupancaPremium
  class PoupancaPremium extends ContaPoupanca {
    atualizaJuros() {
      const juros = 0.012;
      const ganho = this.saldo * juros;
      this.saldo += ganho;
      console.log(`Juros atualizados! Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
  }
  
  // Testando as classes
  const contaPoupanca = new ContaPoupanca(1000, '1234');
  console.log(`Saldo atual: R$ ${contaPoupanca.saldo.toFixed(2)}`);
  contaPoupanca.atualizaJuros();
  contaPoupanca.deposito(500, '1234');
  console.log(`Saldo atual: R$ ${contaPoupanca.saldo.toFixed(2)}`);
  contaPoupanca.retirada(200, '1234');
  console.log(`Saldo atual: R$ ${contaPoupanca.saldo.toFixed(2)}`);
  
  const poupancaPremium = new PoupancaPremium(2000, '5678');
  console.log(`Saldo atual: R$ ${poupancaPremium.saldo.toFixed(2)}`);
  poupancaPremium.atualizaJuros();
  poupancaPremium.deposito(1000, '5678');
  console.log(`Saldo atual: R$ ${poupancaPremium.saldo.toFixed(2)}`);
  poupancaPremium.retirada(500, '5678');
  console.log(`Saldo atual: R$ ${poupancaPremium.saldo.toFixed(2)}`);