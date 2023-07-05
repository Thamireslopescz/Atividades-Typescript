interface Transacao {
    tipo: 'entrada' | 'saida';
    valor: number;
  }
  
  interface Carteira {
    saldo: number;
    transacoes: Transacao[];
  }
  
  function adicionarEntrada(carteira: Carteira, valor: number): void {
    const transacao: Transacao = {
      tipo: 'entrada',
      valor: valor
    };
    carteira.transacoes.push(transacao);
    carteira.saldo += valor;
  }
  
  function adicionarSaida(carteira: Carteira, valor: number): void {
    if (valor > carteira.saldo) {
      throw new Error('Saldo insuficiente para realizar a transação.');
    }
  
    const transacao: Transacao = {
      tipo: 'saida',
      valor: valor
    };
    carteira.transacoes.push(transacao);
    carteira.saldo -= valor;
  }
  
  const minhaCarteira: Carteira = {
    saldo: 1000,
    transacoes: []
  };
  
  console.log('Saldo inicial:', minhaCarteira.saldo);
  
  adicionarEntrada(minhaCarteira, 500);
  console.log('Saldo após entrada:', minhaCarteira.saldo);
  
  adicionarSaida(minhaCarteira, 200);
  console.log('Saldo após saída:', minhaCarteira.saldo);
  
  try {
    adicionarSaida(minhaCarteira, 10000);
  } catch (error) {
    console.log('Erro:', error);
  }
  
  console.log('Transações:', minhaCarteira.transacoes);
  