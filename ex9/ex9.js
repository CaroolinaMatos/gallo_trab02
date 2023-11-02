// Tentando descobrir se um dado era viciado, um dono de cassino honesto (ha! ha! ha! ha!) o
// lançou 50 vezes. Dados os 50 resultados dos lançamentos armazenados em um vetor,
// determinar o número de ocorrências e a porcentagem de cada face.

let vetor = []

function executar() {
  rodarDados()
  analisarDados()
}

function rodarDados() {
  for (let i = 0; i < 50; i++) {
    let numero = Math.floor(Math.random() * 6) + 1
    vetor.push(numero)
  }
}

function analisarDados() {
  let estatisticas = {}

  for (let i = 0; i < vetor.length; i++) {
    let face = vetor[i]
    estatisticas[face] = (estatisticas[face] || 0) + 1
  }

  let totalLancamentos = vetor.length

  for (let face in estatisticas) {
    let ocorrencias = estatisticas[face]
    let porcentagem = (ocorrencias / totalLancamentos) * 100
    console.log(`Face ${face}: ${ocorrencias} ocorrências (${porcentagem.toFixed(2)}%)`)
  }
}
