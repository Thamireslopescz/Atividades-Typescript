type User = {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number;
  };
  
  type Diretor = User & {
    nivelComissionamento: number;
  };
  
  type Usuario = User | Diretor;
  
  function mostrarInformacoesUsuario(usuario: Usuario): void {
    if ('nivelComissionamento' in usuario) {
      let informacoes = `Diretor(a) ${usuario.nome}, ${usuario.idade} anos, comissão nível ${usuario.nivelComissionamento}, salário `;
      if (usuario.salario !== undefined) {
        informacoes += `R$ ${usuario.salario}`;
      } else {
        informacoes += 'N/A';
      }
      console.log(informacoes);
    } else {
      let informacoes = `${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, salário `;
      if (usuario.salario !== undefined) {
        informacoes += `R$ ${usuario.salario}`;
      } else {
        informacoes += 'N/A';
      }
      console.log(informacoes);
    }
  }
  
  // Exemplo de uso
  const usuarios: Usuario[] = [
    {
      nome: 'Thamires',
      idade: 22,
      ocupacao: 'Líder de Desenv.',
      salario: 1000
    },
    {
      nome: 'Leonardo',
      idade: 35,
      ocupacao: 'Diretor(a)',
      nivelComissionamento: 3,
      salario: 2000
    },
    {
      nome: 'Marcelo',
      idade: 35,
      ocupacao: 'CEO Grwdev'
    }
  ];
  
  for (const usuario of usuarios) {
    mostrarInformacoesUsuario(usuario);
  }
  