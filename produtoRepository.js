class ProdutoRepository {
    constructor() {
      this._produtos = []
      this._chaveCarro = 'carros'
    }
  
    salvarCarro(carro) {
      if (carro instanceof Carro) {
        this._formatarCarros()
  
        this._carros.push(carro)
        localStorage.setItem(this._chaveCarro, JSON.stringify(this._carros))
      }
    }
  
    listarCarros() {
      this._formatarCarros()
  
      return [...this._carros]
    }
  
}