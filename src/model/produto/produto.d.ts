export interface Produto {
  id: number
  nome: String
  preco: number
}

export interface ProdutoCreate {
  nome: String
  preco: number
}