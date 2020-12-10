// VARIAVEIS;

// var user = "Glauber Mendes"
// var system = "linux" 

// console.log("O usuário " + user + " utiliza o sistema " + system + ";"  );
// alert("O usuário " + user + " utiliza o sistema " + system + ";")

// ARRAY;

// var listFruits = ['Uva', 'Macã', 'Pera']
// listFruits.push('laranja')
// console.log(listFruits);

// listFruits.pop();
// console.log(listFruits);

// console.log(listFruits.length);
// console.log(listFruits.reverse());


// console.log(listFruits.toString());
// console.log(listFruits.join(' - '));

//DICIONÁRIO/OBJECTS;

// var fruits = {name: "laranja", color: "verde"}
// console.log(fruits);
// console.log(fruits.color);

// var listFruits = [
//     {
//         name: "Maçã",
//         color: "Vermelho"
//     },
//     {
//         name: "Uva",
//         color: "Lilas"
//     },
//     {
//         name: "Goiaba",
//         color: "Verde"
//     }
// ]

// console.log(listFruits[1]);
// console.log(listFruits[1].color);

//CONDICIONAIS;

// var age = prompt("Informe a sua idade");

// if (age < 16) {
//     alert("Não pode votar")
// } else if (age >= 16 && age <= 17) {
//     alert("O voto é facultativo")
// } else {
//     alert("O voto é obrigatório")
// }

//LAÇOS DE REPETIÇÃO;

// var count = 0;
// while(count <= 5) {
//     console.log(count);
//     count ++    
// }

// var count;
// for(count=0; count <=10; count++){
//     var tabuada = count * 5;
//     console.log(5 + " X " + count + " = " + tabuada);
// }

//DATE;

var day = new Date();

// console.log(day);
// console.log(day.getDay());
// console.log(day.getMonth()+1);  //como a contagem se inicia no 0, devemos acrescentar +1 para informar o mês correto;
// console.log(day.getHours());
// console.log(day.getMinutes());
console.log("Hoje é " + day.getDate() + "/" + (day.getMonth()+1) + " de " + day.getFullYear());
