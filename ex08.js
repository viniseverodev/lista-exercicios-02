const vendas = [
  { cliente: "Lucas", total: 120 },
  { cliente: "Mariana", total: 180 },
  { cliente: "Carlos", total: 90 },
  { cliente: "Lucas", total: 210 },
  { cliente: "Fernanda", total: 60 }
]

const totalPorCliente = vendas.reduce((acc, venda) => {
  if (acc[venda.cliente]) {
    acc[venda.cliente] += venda.total
  } else {
    acc[venda.cliente] = venda.total
  }
  return acc
}, {})

console.log(totalPorCliente)
