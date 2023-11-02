// Crie um programa que leia um vetor de 10 elementos reais, calcule e exiba a média
// aritmética destes elementos.

let vetor = []
let soma = 0
let media

function executar() {
  pedirNumeros()
  calcularMedia()
  mostrarResultado()
}

function pedirNumeros() {
  for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}° número: `))
    vetor.push(numero)
  }
}

function calcularMedia() {
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i]
  }

  media = soma / vetor.length
}

function mostrarResultado() {
  var resultado = document.getElementById("resultado")
  resultado.innerHTML = `<p>Média: ${media}</p>`
}
