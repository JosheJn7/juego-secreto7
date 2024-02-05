//document es puente para unir java con html en este caso con queryselector vamos a construirlo
// se define H1 el sector Titulo > ingresamos un titulo
//con titulo.innerhtml me permitira ingresar el nombre del titulo que yo quiera asignar
// se define P parrafo e ingresamos un parrafo
//vamos a conectar boton intentar con intentos 
//Optimizar las conexiones con parafos desde java a html
// crea funcion para no repetir las variables cada vez linea 12
// console log numero usuario se chequea si es numero o string
//como son distintos se realiza ajuste con Parseint
// lo anterior nos permitira realizar una triple validacion en linea 26

let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados=[];
let numeroMaximo=10
console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
        
        if(numeroUsuario===numeroSecreto){
        asignarTextoElemento("p",`acertaste el numero en ${intentos} ${(intentos===1)?"vez":"veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        }else{
            //el usuario no acerto
            if (numeroUsuario >numeroSecreto){
                asignarTextoElemento("p", "el numero secreto es menor");
            } else{
               asignarTextoElemento("p","el numero es mayor");
            }
            intentos++;
            limpiarCaja();
        }
        return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value='';
}


function generarNumeroSecreto() { 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
asignarTextoElemento("H1","Juego del numero secreto final");
asignarTextoElemento("p",`Selecciona un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos =1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
     //deshabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled',"true");
  
}

condicionesIniciales();
