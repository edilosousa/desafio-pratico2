class Produto{
    constructor(id, descricao, quantidade){
        this._id  = id
        this._descricao = descricao
        this._quantidade = quantidade
    }
    getId(){
        return this._id
    }
    getDescricao(){
        return this._descricao
    }
    getQuantidade(){
        return this._quantidade
    }
}