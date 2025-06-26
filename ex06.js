function memoize(fn) {
  const cache = {}

  return function(...args) {
    const key = JSON.stringify(args)
    if (cache[key]) {
      return cache[key]
    } else {
      const resultado = fn.apply(this, args)
      cache[key] = resultado
      return resultado
    }
  };
}

function soma(a, b) {
  console.log('Calculando...')
  return a + b
}

const somaMemoizada = memoize(soma)

console.log(somaMemoizada(2, 3))
console.log(somaMemoizada(2, 3))
console.log(somaMemoizada(4, 5))