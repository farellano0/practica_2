import chalk from "chalk"; //Se instala e importa el modulo chalk

/* function greet() {    //First Class Objet classic form
    console.log(chalk.red(`Hello`));
} */
let greet = () => console.log(chalk.redBright(`Hello`));
greet(); //invoke

//functions as parameters : Function Expression
// function logGreeting(fn) {
//      fn();
// }
let logGreeting = fn => fn();
//v1
logGreeting(function(){console.log(chalk.green(`Hola`));});

//v2
logGreeting(()=>{console.log(chalk.whiteBright(`Hola`));});

/* Estamos pasando la función greet como
   parametro e invocandola con el nombre del argumento fn*/

//Concatenación -------------------------------------------------
// console.log(chalk.blue("hola "+ x + " veces"));
// console.log(chalk.green(`Hola ${x} veces
// Perro`));
//---------------------------------------------------------------

//logGreeting(greet);

//function expression --------------------------------------------
// let greetMe = function () {
//     console.log(chalk.cyan(`Hello from the function expression`));
// }

let greetMe = () => console.log(chalk.cyan(`Hello from the function expression`));
greetMe();
logGreeting(greetMe); //function are first class, pass it as a parameter


let greeting = () => console.log(chalk.yellowBright(`Hola`));
greeting();

//-------------------------------------------------------------------------------
let x = 2;
let cuadrado = (x) => x*x;

console.log(chalk.magentaBright(`${cuadrado(7)}`));

