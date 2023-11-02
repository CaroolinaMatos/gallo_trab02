// Crie um programa que leia 24 temperaturas, em graus celsius, considerando que cada
// posição de leitura é o horário da temperatura, registrada ao longe do dia. Ao final exiba ao
// usuário a maior e menor temperatura, bem como o horário de sua ocorrência, e a média das
// temperaturas registradas.

let vetor = []
let maior = []
let menor = []

function executar() {
  pedirTemperaturas()
  mostrarMaiorMenor()
}

function pedirTemperaturas() {
  for (let i = 0; i < 24; i++) {
    let temp = parseFloat(prompt(`Digite a ${i + 1}° temperatura: `))
    vetor.push(temp)
  }

  maior.push(Math.max(...vetor), vetor.indexOf(Math.max(...vetor)))
  menor.push(Math.min(...vetor), vetor.indexOf(Math.min(...vetor)))
}

function mostrarMaiorMenor() {
  let resultMaior = document.getElementById("maior")
  let resultMenor = document.getElementById("menor")

  resultMaior.innerHTML = `<p>Maior: ${maior[0]}, hora: ${maior[1]}`
  resultMenor.innerHTML = `<p>Menor: ${menor[0]}, hora: ${menor[1]}`
}
