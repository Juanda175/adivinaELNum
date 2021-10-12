







let minimo = 1;
let maximo = 1000;
let numaleatorio = Math.floor(Math.random() * maximo - minimo + 1) + minimo;
let numero = 0;

do{
 nombre = prompt("Hola, ingresa tu nombre para iniciar ");
}while (nombre == "");

do {
    numero = parseInt(prompt("Por Favor ingrese el numero elegido entre el " + minimo + " y el  "+ maximo));
    if (numero > numaleatorio){
        alert("pruebe numero menor");
    }else if (numero < numaleatorio){
        alert("Pruebe numero mas grande")
    }

} while (numero != numaleatorio);

if (numero == numaleatorio){
    alert("FELICITACIONES " + nombre + " adivinaste el numero")
}
