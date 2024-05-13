


const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function Inicio() {
    console.log("----------------------------------------------------------\n Menu \n1=ejercicio1.js\n2=ejercicio2.js\n3=ejercicio3.js\n4=ejercicio4.js\n5=ejercicio5.js\n6=ejercicio6.js\n7=ejercicio7.js\n8=salir")

    rl.question("Digite el numero de el ejericicio que quiere correr: ", (nFuncion) => {
        switch (parseInt(nFuncion)) {
            case 1:
                ejer1();

                break;
            case 2:
                ejer2();
                break;
            case 3:
                ejer3();
                break;
            case 4:
                ejer4();
                break;
            case 5:
                ejer5();
                break;
            case 6:
                ejer6();
                break;
            case 7:
                ejer7();
                break;
            case 8:
                rl.close()
                break;
            default:
                console.log("Digite un numero correcto de el menu")
                break;

        }


    })

}
Inicio()


function ejer1() {
    rl.question("Ingrese un numero:  ", (numero) => {

        const num = Evaluar(numero)
        Inicio();
    })

    function Evaluar(numero) {

        if (numero >= 1) {
            return console.log(numero + " es un numero positivo")
        } else if (numero <= -1) {
            return console.log(numero + " es un numero negativo")
        } else {

            return console.log(numero + " El numero es 0")
        }


    }


}

function ejer2() {
    rl.question("Ingrese el primer numero= ", (num1) => {
        rl.question("Ingrese el segundo numero= ", (num2) => {
            rl.question("Ingrese el tercer numero= ", (num3) => {
                let numero1 = parseFloat(num1);
                let numero2 = parseFloat(num2);
                let numero3 = parseFloat(num3);
                let numeroMayor = evaluar(numero1, numero2, numero3)
                Inicio();
            })
        })
    })

    function evaluar(num1, num2, num3) {
        if (num1 > num2 && num1 > num3) {
            console.log(`${num1} es el mayor`)

        } else if (num2 > num1 && num2 > num3) {
            console.log(`${num2} es el mayor`)
        } else if (num3 > num1 && num3 > num2) {
            console.log(`${num3} es el mayor`)
        }

    }


}
function ejer3() {
    rl.question("Digite el numero a realizar factorial", (n1) => {
        facto(n1)

    })

    function facto(n1) {
        let resultado = 1
        numero = parseFloat(n1);
        for (let i = 1; i <= numero; i++) {

            resultado *= i;
        }
        console.log(`El resultado factorial es: ${resultado}`);
        Inicio();
    }

}
function ejer4() {
    rl.question("Ingrese un numero a evaluar:", (numero) => {
        n1 = parseFloat(numero);
        Inicio();
    })

    function par(n1) {
        if (n1 % 2 === 0) {
            console.log(`El ${n1} es par`)
        } else {
            console.log(`EL ${n1} no es par`)
        }
    }

}
function ejer5() {
    rl.question("Ingrese el primer color:", (color1) => {
        rl.question("Ingrese el segundo color:", (color2) => {


            if (color1 === "azul" && color2 === "amarillo") {
                //verde
                console.log("la mezcla genera el color verde")
            } else if (color1 === "azul" && color2 === "rojo") {
                //morado
                console.log("la mezcla genera el color morado")
            } else if (color1 === "rojo" && color2 === "amarillo") {
                //naranja
                console.log("la mezcla genera el color naranja")
            } else {
                console.log("Combinacion no se encuentra disponible ")
            }
            Inicio();
        })
    })

}
function ejer6() {
    rl.question("Digite el numero de mes a conocer:", (nMes) => {
        let nombreMes
        switch (parseInt(nMes)) {
            case 1:
                nombreMes = "Enero";
                break;
            case 2:
                nombreMes = "Febrero";
                break;
            case 3:
                nombreMes = "Marzo";
                break;
            case 4:
                nombreMes = "Abril";
                break;
            case 5:
                nombreMes = "Mayo";
                break;
            case 6:
                nombreMes = "Junio";
                break;
            case 7:
                nombreMes = "Julio";
                break;
            case 8:
                nombreMes = "Agosto";
                break;
            case 9:
                nombreMes = "Septiembre";
                break;
            case 10:
                nombreMes = "Octubre";
                break;
            case 11:
                nombreMes = "Noviembre";
                break;
            case 12:
                nombreMes = "Diciembre";
                break;
            default:
                nombreMes = "Numero de mes no existe";
                break;
        }
        console.log(nombreMes);
        Inicio();
    })

}
function ejer7() {
    rl.question("Digite la categoria del vehiculo: ", (categoria) => {
        let tipoVehiculo

        switch (categoria) {
            case 'Moto':
                tipoVehiculo = "Motocicleta";
                break;
            case 'Auto':
                tipoVehiculo = "Automovil";
                break;
            case 'Camion':
                tipoVehiculo = "Super Camion";
                break;
            case 'Bicicleta':
                tipoVehiculo = "Super Bicicleta";
                break;
            default:
                tipoVehiculo = "La categoria no existe"
                break;



        }
        console.log(tipoVehiculo);
        Inicio();
    })

}

