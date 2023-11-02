// Crie um algoritmo onde o usuário forneça dois vetores de inteiros com 4 posições e um
// outro vetor de caracteres de mesmo tamanho para conter as operações aritméticas. Os
// resultados das operações com esses vetores devem ser armazenados em um terceiro vetor.

let vetor1 = []
let vetor2 = []
let vetorOperacoes = []
let resultados = []

function executar() {
  pedirNumeros()
  pedirOperadores()
  calcularOperacoes()
  exibirResultado()
}

function pedirNumeros() {
  for (let i = 0; i < 4; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}° número do 1° vetor: `))
    vetor1.push(numero)
  }

  for (let i = 0; i < 4; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}° número do 2° vetor: `))
    vetor2.push(numero)
  }
}

function pedirOperadores() {
  for (let i = 0; i < 4; i++) {
    let operador = prompt(`Digite o ${i + 1}° operador: `)
    vetorOperacoes.push(operador)
  }
}

function calcularOperacoes() {
  for (let i = 0; i < 4; i++) {
    let operacao = eval(`${vetor1[i]} ${vetorOperacoes[i]} ${vetor2[i]}`)
    resultados.push(operacao)
    console.log(resultados)
  }
}

function exibirResultado() {
  let resultado = document.getElementById("resultado")
  let html = ""

  for (let i = 0; i < 4; i++) {
    html += `<p>${vetor1[i]} ${vetorOperacoes[i]} ${vetor2[i]}: ${resultados[i]}</p>`
  }

  resultado.innerHTML = html
}
