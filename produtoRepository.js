class ProdutoRepository {
  constructor() {
    this._produtos = [];
    this._chaveProdutos = "produtos";
  }

  inserirProduto(produto) {
      if(produto instanceof Produto){
        const pr = {
            codigo : produto.getCodigo(),
            descricao : produto.getDescricao(),
            quantidade : produto.getQuantidade()
        }
        this._produtos = JSON.parse(localStorage.getItem("produtos")) || [];
        this._produtos.push(pr);
        localStorage.setItem(this._chaveProdutos, JSON.stringify(this._produtos));
        console.log("salvo com sucesso!");
        // console.log(prod.getCodigo())
      }
  }

  listarProdutos() {
    const produtosLocal = localStorage.getItem("produtos");
    const produtos = JSON.parse(produtosLocal);
    return produtos;
  }
}
