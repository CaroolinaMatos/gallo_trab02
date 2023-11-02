// Crie uma função que exiba separadamente os elementos pares e impares de um vetor de 10
// elementos.

let vetor = []
let pares = []
let impares = []

function executar() {
  pedirNumeros()
  verificarParImpar()
  mostrarNumeros()
}

function pedirNumeros() {
  for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}° número: `))
    vetor.push(numero)
  }
}

function verificarParImpar() {
  for (let i = 0; i < 10; i++) {
    if (vetor[i] % 2 == 0) {
      pares.push(vetor[i])
    } else {
      impares.push(vetor[i])
    }
  }
}

function mostrarNumeros() {
  let resultPares = document.getElementById("pares")
  let resultImpares = document.getElementById("impares")

  resultPares.innerHTML = `<p>Pares: ${pares}</p>`
  resultImpares.innerHTML = `<p>Pares: ${impares}</p>`
}
