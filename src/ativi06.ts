import { User } from './user';

type Diretor = User & {
  nivelComissionamento: number;
};

function mostrarInformacoesDiretor(diretor: Diretor): void {
  let informacoes = `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário `;
  if (diretor.salario !== undefined) {
    informacoes += `R$ ${diretor.salario}`;
  } else {
    informacoes += 'N/A';
  }
  console.log(informacoes);
}

const diretor: Diretor = {
  nome: 'Daphne',
  idade: 23,
  ocupacao: 'Diretor(a)',
  nivelComissionamento: 5,
  salario: 1000
};

mostrarInformacoesDiretor(diretor);
