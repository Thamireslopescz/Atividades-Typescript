import { User } from './user';

function mostrarInformacoesUsuario(user: User): void {
  let informacoes = `${user.nome}, ${user.idade} anos, ${user.ocupacao}, salário `;
  if (user.salario !== undefined) {
    informacoes += `R$ ${user.salario}`;
  } else {
    informacoes += 'N/A';
  }
  console.log(informacoes);
}

const usuario1: User = {
  nome: 'Thamires',
  idade: 22,
  ocupacao: 'Líder de Desenv.',
  salario: 1000
};

const usuario2: User = {
  nome: 'Marcelo',
  idade: 35,
  ocupacao: 'CEO Growdev'
};

mostrarInformacoesUsuario(usuario1);
mostrarInformacoesUsuario(usuario2);
