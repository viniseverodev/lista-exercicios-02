let frase = "olá olá mundo mundo teste exemplo exemplo único grêmio"
let palavras = frase.split(" ")
let contador = {}
let unicas = []


for (let i = 0; i < palavras.length; i++) {
  let palavra = palavras[i]
  if (contador[palavra]) {
    contador[palavra]++
  } else {
    contador[palavra] = 1
  }
}


for (let palavra in contador) {
  if (contador[palavra] === 1) {
    unicas.push(palavra)
  }
}

console.log(unicas) 

// Não sei se é bem isso o exercício, fiquei com um pouco de dúvida
