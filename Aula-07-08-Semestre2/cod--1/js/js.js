// Pegando o nome pelo prompt
let nome = prompt("Informe seu nome: ");
// let nota = Number(prompt("Nota 1: "));
let nota1 = prompt("Informe a nota 1: ");
let nota2 = prompt("Informe a nota 2: ");
let nota3 = prompt("Informe a nota 3: ");
let not1 = parseFloat(nota1);
let not2 = parseFloat(nota2);
let not3 = parseFloat(nota3); // ou parseInt
let mediaNotas = (not1 + not2 + not3) / 3;
// Armazenando o nome pelo id1
let ident = document.getElementById("id1");
let mediaTela = document.getElementById("id2");
// Colocando o conteúdo para ser exibido na página
ident.textContent = nome;
mediaTela.textContent = mediaNotas;
// ou // ident.innerHTML = nome;
// ou // ident.innerText = nome;

//Estrutura de decisão
if (condicao) {

} else {

}