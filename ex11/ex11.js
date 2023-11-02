// Crie um programa para simular a venda de ingressos para uma sessão de cinema de uma
// sala que possui 4 fileiras com 20 poltronas cada. Deve-se permitir ao usuário exibir as
// poltronas, mostrando de alguma forma se estão ocupadas ou vazias. Também deve-se
// permitir ao usuário comprar um poltrona, onde este deve informar a fileira (nomeadas como
// A, B, C e D), e o número da poltrona; lembre-se que se a poltrona já estiver ocupada não
// deve-se concluir a venda. O sistema também deve apresentar ao usuário o total de poltronas
// vazias e ocupadas.

const salaDeCinema = Array(4).fill(null).map(() => Array(20).fill('V'));

function exibirPoltronas() {
  console.log("Mapa de Poltronas:");
  for (let i = 0; i < salaDeCinema.length; i++) {
    const fileira = String.fromCharCode(65 + i);
    console.log(`Fileira ${fileira}: ${salaDeCinema[i].join(' ')}`);
  }
  console.log("\n");
}

function comprarPoltrona() {
  const fileira = prompt("Informe a fileira (A, B, C, D): ").toUpperCase();
  const numeroPoltrona = parseInt(prompt("Informe o número da poltrona (1-20): ") - 1);

  if (salaDeCinema[fileira.charCodeAt(0) - 65][numeroPoltrona] === 'V') {
    salaDeCinema[fileira.charCodeAt(0) - 65][numeroPoltrona] = 'O';
    console.log(`Você comprou a poltrona ${fileira}${numeroPoltrona + 1}.\n`);
  } else {
    console.log(`Desculpe, a poltrona ${fileira}${numeroPoltrona + 1} já está ocupada.\n`);
  }
}

function contarPoltronasDisponiveis() {
  const totalVazias = salaDeCinema.flat().filter((poltrona) => poltrona === 'V').length;
  return totalVazias;
}

while (true) {
  console.log("1 - Exibir Poltronas");
  console.log("2 - Comprar Poltrona");
  console.log("3 - Total de Poltronas Disponíveis");
  console.log("4 - Sair");

  const escolha = prompt("Escolha uma opção: ");

  switch (escolha) {
    case '1':
      exibirPoltronas();
      break;
    case '2':
      comprarPoltrona();
      break;
    case '3':
      const totalVazias = contarPoltronasDisponiveis();
      console.log(`Total de poltronas disponíveis: ${totalVazias}\n`);
      break;
    case '4':
      break;
    default:
      console.log("Opção inválida. Tente novamente.\n");
  }
}
