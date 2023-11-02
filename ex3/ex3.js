// Crie um procedimento para inverter a ordem dos elementos em um vetor de 20 elementos.

let vetor = []

function executar() {
  pedirValores()
  inverterVetor()
}

function pedirValores() {
  for (let i = 0; i < 20; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}° número: `))
    vetor.push(numero)
  }
}

function inverterVetor() {
  var resultado = document.getElementById("resultado")
  resultado.innerHTML = `<p>Inverso: ${vetor.reverse()}</p>`
}
