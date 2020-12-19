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

// var day = new Date();

// console.log(day);
// console.log(day.getDay());
// console.log(day.getMonth()+1);  //como a contagem se inicia no 0, devemos acrescentar +1 para informar o mês correto;
// console.log(day.getHours());
// console.log(day.getMinutes());
// console.log("Hoje é " + day.getDate() + "/" + (day.getMonth()+1) + " de " + day.getFullYear());

// FUNCTION;

// function somaNumber (n1, n2){
//     return n1 + n2;
// }

// console.log(somaNumber(1,5));

// function validarDate (age){
//     if(age >= 18){
//         return true;
//     } else {
//         return false
//     }

// }

// var validar = prompt("Informe sua idade");
// console.log(validarDate(validar));

//MANIPULANDO ELEMENTOS DA PÁGINA;

// function insertData (data){
//     var data = alert("Seus dados foram enviado com sucesso");
//     return data;
// }


// function returnMessage (){
//     document.getElementById("message").innerHTML = "Seus dados foram carregados com sucesso!";  
    
//     setTimeout(function(){
//         window.location.href = "http://127.0.0.1:5500/index.html";
//     }, 2000)
// }

// function funcaoChange(elemento){
//     console.log(elemento.value);
// }




// setTimeout(function(){
//     alert("Ola mundo!");
//         //your code to be executed after 1 seconds
// },delay);


// window.setTimeout('funcao()', intervalo_em_milisegundos);


// let user = {
//     name: "Glauber Mendes"
// }
// console.log(user);
// //Alterando propriedade do objeto

// user.name = "Outro nome qualquer"
// console.log(user);

// user['name'] = "Um outro nome 2"
// console.log(user);

// const prop = "name"
// user[prop] = "Proximo nome 3"
// console.log(user);


// const arrowFunc1 = () => "code here";
// const arrowFunc2 = (param) => {
//     return param
// }

// console.log(arrowFunc1());
// console.log(arrowFunc2("modificando paramentro"));


//ORIENTAÇÃO A OBJETOS

// function pessoa (name){
//     this.name = name
// }
// const p = new pessoa ('Glauber')

// console.log(p);

// function pessoa (name) {
//     this.name = name

//     return {
//         name: 'Rafaela'
//     }
// }
// const p2 = new pessoa ('Glauber')
// console.log(p2); //RETORNO É PRIORIDADE PRO OBJETO QUE FOI EXPLICITO;


//HERANÇA
// 'use strict';
// function Animal(qtdPatas) {
//     this.qtdPatas = qtdPatas
// }

// function Cachorro (morde) {
//     Animal.call(this, 4)

//     this.morde = morde
// }

// const pitbull = new Cachorro(true)

// console.log(pitbull);

//CLASSES
class Animal {
    constructor (qtdPatas){
        this.qtdPatas = 4;
    }
}

class Cachorro extends Animal{
    constructor (morde) {
        super(4);
        this.morde = morde;
    }
}

const pitbull = new Cachorro(false);
console.log(pitbull);