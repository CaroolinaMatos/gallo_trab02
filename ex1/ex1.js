// Crie um procedimento para exibir a soma dos elementos de um vetor de 15 elementos
// inteiros.

let vetor = []
let soma = 0

function executar() {
  pedirNumeros()
  calcularSoma()
  exibirResultado()
}

function pedirNumeros() {
  for (let i = 0; i < 15; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}° número: `))
    vetor.push(numero)
  }
}

function calcularSoma() {
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i]
  }
}

function exibirResultado() {
  var resultado = document.getElementById("resultado")
  resultado.innerHTML = `<p>Soma: ${soma}</p>`
}
