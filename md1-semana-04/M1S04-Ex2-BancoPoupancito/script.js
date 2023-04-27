class Conta {
    constructor(senha) {
      this.saldo = 0;
      this._senha = senha;
    }
  
    deposito(senha, valor) {
      if (senha === this._senha) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
      } else {
        console.log("Senha incorreta.");
      }
    }
  
    retirada(senha, valor) {
      if (senha === this._senha) {
        if (valor > this.saldo) {
          console.log("Saldo insuficiente.");
        } else {
          this.saldo -= valor;
          console.log(`Retirada de R$${valor.toFixed(2)} realizada com sucesso.`);
        }
      } else {
        console.log("Senha incorreta.");
      }
    }
  }

  const contaCorrente = new Conta("senha123");

console.log(`Saldo atual: R$${contaCorrente.saldo.toFixed(2)}`); 
// Saldo atual: R$0.00

contaCorrente.deposito("senha123", 100);
console.log(`Saldo atual: R$${contaCorrente.saldo.toFixed(2)}`); 
// Saldo atual: R$100.00

contaCorrente.retirada("senha123", 50);
console.log(`Saldo atual: R$${contaCorrente.saldo.toFixed(2)}`); 
// Saldo atual: R$50.00

contaCorrente.retirada("senha123", 100);
console.log(`Saldo atual: R$${contaCorrente.saldo.toFixed(2)}`); 
// Saldo insuficiente.

contaCorrente.deposito("senha1234", 50);
console.log(`Saldo atual: R$${contaCorrente.saldo.toFixed(2)}`); 
// Senha incorreta.