function paresParaObjeto(pares) {
  const obj = {}
  for (let i = 0; i < pares.length; i++) {
    const chave = pares[i][0]
    const valor = pares[i][1]
    obj[chave] = valor
  }
  return obj
}

function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]])
    }
  }
  return pares
}

const pares = [["nome", "João"], ["idade", 30], ["cidade", "São Paulo"]]
const objeto = paresParaObjeto(pares)
console.log(objeto)

const paresConvertidos = objetoParaPares(objeto)
console.log(paresConvertidos)
