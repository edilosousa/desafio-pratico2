class ProdutoRepository {
    constructor() {
      this._produtos = []
      this._chaveProdutos = 'produtos'
    }
  
    inserirProduto(produto) {
        var a = []
        a = JSON.parse(localStorage.getItem('produtos')) || []
        a.push(produto)
        localStorage.setItem(this._chaveProdutos, JSON.stringify(a))
        console.log("salvo com sucesso!")
    }
  
    listarCarros() {
      return [...this._produtos]
    }
  
}