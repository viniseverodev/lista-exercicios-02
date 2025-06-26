const prompt = require('prompt-sync') ()

let tentativas = 0
let number = Math.floor(Math.random() * 100) + 1
let palpite = 0

console.log(`Jogo da Adivinhação - Adivinhe o número de 1 a 100.\n`)
while(palpite !== number) {
  palpite = Number(prompt('Adivinhe o número secreto: '))
  tentativas++

  if(palpite < number) {
    console.log('Digite um número maior.')
  } else if (palpite > number){
    console.log('Digite um número menor.')
  }

}

console.log(`Parabéns você acertou em ${tentativas} tentativas, o número secreto era ${number}.`)