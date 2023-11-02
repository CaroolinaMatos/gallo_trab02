// Crie um programa que some dois vetores de mesmo tamanho e armazene o resultado em
// um terceiro vetor.

let vetor1 = []
let vetor2 = []
let somaVetor = []

function executar() {
  pedirNumeros()
  calcularSoma()
  exibirResultado()
}

function pedirNumeros() {
  for (let i = 0; i < 15; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}° número do 1° Vetor: `))
    vetor1.push(numero)
  }

  for (let i = 0; i < 15; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}° número do 2° Vetor: `))
    vetor2.push(numero)
  }
}

function calcularSoma() {
  for (let i = 0; i < 15; i++) {
    somaVetor.push(vetor1[i] + vetor2[i])
  }
}

function exibirResultado() {
  var resultado = document.getElementById("resultado")
  resultado.innerHTML = `<p>Soma: ${somaVetor}</p>`
}
