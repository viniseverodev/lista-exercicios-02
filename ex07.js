const produtos = [
  { nome: "Camiseta do grêmio", preco: 200 },
  { nome: "Chuteira", preco: 150 },
  { nome: "Meião", preco: 50 },
  { nome: "Caneleira", preco: 85 }
]

function nomesOrdenadosPorPreco(produtos) {

  const produtosOrdenados = produtos.slice().sort((a, b) => a.preco - b.preco)

  const nomes = produtosOrdenados.map(produto => produto.nome)

  return nomes
}

console.log(nomesOrdenadosPorPreco(produtos))