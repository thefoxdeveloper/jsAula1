// exec 1
let minhaIdade = 25;

document.write("Minha idade é " + minhaIdade + " anos.<br>");

// exec 2

let x = 10;
let y = 20;

let z = x + y;

document.write("O resultado da soma de " + x + " e " + y + " é " + z + ".<br>");

// exec 3

let totalDaCompra = 149.9;
let quantidadeDeParcelas = 2;

let valorDaParcela = totalDaCompra / quantidadeDeParcelas;

document.write("O valor total da compra foi R$" + totalDaCompra + "<br>");
document.write(
  "Forma de pagamento: " +
    quantidadeDeParcelas +
    "x de R$" +
    valorDaParcela +
    "<br>"
);

// exec 4

let minutos = 120;

let segundos = minutos * 60;

document.write(minutos + " minutos equivale a " + segundos + " segundos!<br>");

// exec 5

let nomeAluno = "Douglas";
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

document.write("O aluno " + nomeAluno + " ficou com média " + media + "<br>");

// exec 6

let A = 10;
let B = 20;

let temp = A;
A = B;
B = temp;

document.write("Valor de A: " + A + "<br>");
document.write("Valor de B: " + B + "<br>");

// exec 7

let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));

let votosBrancos = parseInt(prompt("Digite o número de votos em branco:"));
let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
let votosValidos = totalEleitores - (votosBrancos + votosNulos);

let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;

document.write(
  "Percentual de votos em branco: " + percentualBrancos.toFixed(2) + "%<br>"
);
document.write(
  "Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%<br>"
);
document.write(
  "Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%<br>"
);

//exec 8

let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

if (valor1 === valor2) {
  document.write("Números iguais");
} else if (valor1 > valor2) {
  document.write("Primeiro é maior");
} else {
  document.write("Segundo é maior");
}

//exec 9

let quantidadeDeMacas = parseInt(
  prompt("Digite a quantidade de maçãs compradas:")
);

let precoPorDuzia = 0.25;
let precoPorUnidade = 0.3;

let valorTotal;

if (quantidadeDeMacas >= 12) {
  valorTotal = quantidadeDeMacas * precoPorDuzia;
} else {
  valorTotal = quantidadeDeMacas * precoPorUnidade;
}

document.write("O valor total da compra é R$" + valorTotal.toFixed(2));

//exec 10

let nome = prompt("Digite o seu nome:");
let idade = parseInt(prompt("Digite a sua idade:"));

let anoAtual = 2023();

let anoNascimento = anoAtual - idade;

document.write(
  "Nome: " + nome + ", Idade: " + idade + " anos, nasceu em " + anoNascimento
);

// exec 11

let numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (numero % 2 === 0) {
  alert("Número é par!");
} else {
  alert("Número é ímpar!");
  2012;
}

// exec 12

let anoAtual = 2023;

let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));

let idade = anoAtual - anoNascimento;

if (idade >= 16) {
  document.write("A pessoa pode votar este ano.");
} else {
  document.write("A pessoa não pode votar este ano.");
}
