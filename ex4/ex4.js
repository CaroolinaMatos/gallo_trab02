// Ler um vetor com 20 números inteiros e apresentar o resultado da multiplicação dos valores
// pelos seus índices.

let vetor = []
let vetorMult = []

function executar() {
  pedirNumeros()
  multiplicarNumeros()
  exibirResultado()
}

function pedirNumeros() {
  for (let i = 0; i < 20; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1} número: `))
    vetor.push(numero)
  }
}

function multiplicarNumeros() {
  for (let i = 0; i < 20; i++) {
    let multiplicacao = vetor[i] * i
    vetorMult.push(multiplicacao)
  }
}

function exibirResultado() {
  var resultado = document.getElementById("resultado")
  resultado.innerHTML = `<p>Vetor Multiplicado: ${vetorMult}</p>`
}
