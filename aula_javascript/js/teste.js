/* Aprendendo como o js declara algumas variáveis e sobre o alert() e o console.log()
var idade = 26;
var idade2 = 10;
var nome = "Lais Alves";
alert("Bem vinda " + nome);
var message = "Inglaterra é um país da União Europeia.";
alert(idade + idade2);
console.log("idade + idade2 = " + (idade + idade2));
console.log(message.replace("da União Europeia", "do Reino Unido"));
*/

/* Aprendendo sobre listas e dicionarios
var lista = ["banana", "maçã", "pera", "melancia"];
console.log(lista[0]); //>>>banana
lista.push("uva"); // adiciona "uva" ao final da lista
console.log(lista);
lista.pop(); // remove o último elemento se vazio
console.log(lista);
console.log(lista.slice(0, 2)); // retorna uma "fatia" da lista
console.log(lista.length); // retorna o comprimento da lista
console.log(lista.reverse()); // retorna a lista na ordem reversa
console.log(lista.join(" - ")); // retorna a lista separada por " - "

var fruta = {nome : "maçã", cor: "vermelha"};
console.log(fruta.cor) // retorna "vermelha";
var frutas = [{nome: "uva", cor: "roxa"}, {nome: "maçã", cor: "vermelha"}];
console.log(frutas[1].nome) // retorna "maçã";
*/

/* Aprendendo condicionais e laços de repetição
// var idade = 18;
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("Acesso permitido.")
}else {
    alert("Acesso proibido.")
};

var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count); // vai aparecer o alert 6 vezes na tela com os número de 0 a 5.
    count++; // mesma coisa que count = count + 1
};

// método equivalente ao de cima:
for (count = 0; count <= 5; count++) {
    alert(count);
};
 
// Aprendendo a usar Data
var d = new Date();
alert(d) // retorna "Fri May 22 2020 16:07:21 GMT-0300 (Brasilia Standard Time)"
alert(d.getDate) // retorna o dia. tem vários outros métodos get (minutes, month, etc)
*/