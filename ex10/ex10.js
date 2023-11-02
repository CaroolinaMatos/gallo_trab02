// Deseja-se publicar o número de acertos de cada aluno em uma prova em forma de testes. A
// prova consta de 30 questões, cada uma com cinco alternativas identificadas por A, B, C, D e
// E. Para isso são dados:
// • o cartão gabarito;
// • o número de alunos da turma;
// • o cartão de respostas para cada aluno, contendo o seu número e suas respostas.

let gabarito = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'];
let respostasAluno = []
let acertos = 0

function executar() {
  pedirRespostas()
  calcularAcertos()
  mostrarResultado()
}

function pedirRespostas() {
  for (let i = 0; i < 30; i++) {
    let resposta = prompt(`Digite a ${i + 1}° resposta: `)
    respostasAluno.push(resposta)
  }
}

function calcularAcertos() {
  for (let i = 0; i < respostasAluno.length; i++) {
    if (respostasAluno[i] === gabarito[i]) {
      acertos++;
    }
  }
}

function mostrarResultado() {
  let resultado = document.getElementById("resultado")
  resultado.innerHTML = `<p>Resultado: Total de Acertos: ${acertos}</p>`
}
