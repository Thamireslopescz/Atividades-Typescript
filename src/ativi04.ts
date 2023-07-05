interface Produto {
    id: number;
    nome: string;
    preco: number;
  }
  
  class GerenciadorProdutos {
    private produtos: Produto[];
  
    constructor() {
      this.produtos = [];
    }
  
    cadastrarProduto(produto: Produto): void {
      this.produtos.push(produto);
      console.log('Produto cadastrado com sucesso!');
    }
  
    listarProdutos(): void {
      if (this.produtos.length === 0) {
        console.log('Não há produtos cadastrados.');
      } else {
        console.log('Lista de Produtos:');
        this.produtos.forEach((produto) => {
          console.log(`ID: ${produto.id} | Nome: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`);
        });
      }
    }
  
    excluirProduto(id: number): void {
      const index = this.produtos.findIndex((produto) => produto.id === id);
      if (index === -1) {
        console.log('Produto não encontrado.');
      } else {
        this.produtos.splice(index, 1);
        console.log('Produto excluído com sucesso!');
      }
    }
  }
  
  const gerenciador = new GerenciadorProdutos();
  
  gerenciador.cadastrarProduto({ id: 1, nome: 'Camiseta', preco: 29.99 });
  gerenciador.cadastrarProduto({ id: 2, nome: 'Calça Jeans', preco: 79.99 });
  
  gerenciador.listarProdutos();
  
  gerenciador.excluirProduto(1);
  
  gerenciador.listarProdutos();
  