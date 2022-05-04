// // Entendendo funções:

// // undefined é um tipo de valor que não existe
// // null é um tipo de valor inválido
// // função sem return é uma subrotina.

// function escreve(nome, sobrenome){ //Função nominal com parâmetro obrigatório
//     const a = sobrenome;
//     if(a===undefined){
//         console.log("a é undefined");
//         console.log("Valor de a", a, "\n");
//         console.log("Valor de sobrenome", sobrenome, "\n");
//     }
//     console.log(`${nome} ${sobrenome}`);
// }

// escreve("Jéssica");

// //quando a função tem return, eu tenho liberdade de uso, eu escolho onde usar essa função
// function soma (a, b){ // função nominal que retorna valor
//     return Number(a) + Number(b);
// }

// const resultado = soma(1,2);

// const exibe = function(x){ // expressão de função = uma função é atribuída a um contexto por exemplo uma variável
//     return `Exibindo parâmetro ${x}`;
// }

// console.log(exibe(" -x- "));

// // Onde o JS está sendo executado? Qual o contexto?
// // Contexto: Navegador, this depende do contexto
// // no navegador o this é a window

// // se vc estiver usando a versão estrita o this não será a window

// function quemEoThis(){
//     console.log(this===window);
// }

// function quemEoThisEstrito(){
//     // quando queremos usar o JS na versão mais polida, o use script deve sert informado no início
//     "use scrict";
//     console.log("strict");
//     console.log(this == window);
// }

// quemEoThis();
// quemEoThisEstrito();

// // o this é uma variável interna para apontar atributos e métodos dentro de um objeto ou classe
// // escopo é uma área de atuação

// function Exibe2(){
//     this.a = 50;
// }

// const novoObjeto = new Exibe2();
// console.log(novoObjeto.a);

// //objeto global
let empresa = this;// window

//qando criamos um objeto, criamos um escopo.
const aluno = {
    nome: "Jéssica",
    matricula: 123,
    executar: function(){
        return this.nome;
    }
};

console.log(aluno.executar());

// estrito - this é undefined.
console.log("Quem é o this no contexto global", empresa)

function globalObj(){
    //"use strict"; //this vira undefined;
    return this;
}

document.write ("<h2>Escrevendo no body</h2>");
document.write (globalObj());

//globalObj().alert("????????");

//Arrow Function - Função de seta, ela é mais curta, não tem o próprio contexto.
const novaFuncao = (a, b) => {
    console.log("Chamando de dentro de uma arrow function");
    //Interpolação de variáveis é chamar uma variável dentro de uma string; Template String.
    console.log(`Exibindo o valor de ${a}`);
    //Concatenação de variáveis.
    console.log("Exibindo o total de caracteres " + b.length);
    //indentação é um código escrito de forma legível, que respeita hierarquia { dá um espaço, para facilitar a leitura do código. um código indentado é uma das maneiras de manter um código limpo.}
  };
  
  const funcao3 = (a) =>
    console.log(`Exibindo o total de caracteres de ${a.length}`);
  
  funcao3("Jéssica Lopes");

 //no arrow function o THIS não existe!

// function Pessoa(){
//     this.velocidade = 0;

//     function andar (){
//         console.log("velocidade atual", this.velocidade);
//     }
// }

//Objeto literal
// const Pessoa = {
//     velocidade: 0,
//     nome:"Jéssica Lopes Bruno",
//     andar: function () {
//         console.log("velocidade atual", this.velocidade);
//     },
//     exibeNome: function (){
//         console.log(`Nome: ${this.nome} velocidade: ${this.velocidade}`);
//     }
// }



//novo JavaScript ES2017

//spread operator ...

const carros =(primeiro, segundo, ...restante) =>{
    console.log(`Os carros informados foram: ${primeiro}, ${segundo} - ${restante[5]}. Todos os demais são ${restante.join(
         ", "
        )}`
    );
};
carros(
    "DelRey",
    "Brasilia",
    "Belina",
    "Fusca",
    "Variant",
    "Parati",
    "Monza",
    "scort",
    "Fiat 147",
    "D-20",
    "Kombi",
    "BMW",
    "Opala",
    "Land-Rover",
    "Gurgel",
    "Maverick",
    "Marea"
);

const frutas = ['Guaraná', 'Cupuaçú', 'Açaí'];

const todasFrutas = [...frutas, "Banana", "Abacaxi"];

console.log("Todas as Frutas", todasFrutas);

//destructuring assignment
//Atribuição por desestruturação.

let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log('Exibindo o primeiro:', primeiro);
console.log('Exibindo o restante:', resto);

const meuArray = [10,20,30,40];
console.log(meuArray, meuArray.join(" | "));

// const [p, s, t, q] = meuArray;
// const [p, ...q] = meuArray.reverse();
// console.log('Exibindo o quarto elemento:', q);
const [q, ...p] = meuArray.reverse();
console.log(p.reverse());