/* /* // actividad de practica de Arrays
/* let frutas = ["melocoton", "manzana", "kiwi"]

console.log(frutas.length);  // 3 

console.log(frutas[0]); // imprime melocoton

frutas[0] = "mango";

console.log (frutas);

frutas.push("manzana"); // añade elemento al final

console.log (frutas);

frutas.pop ( "manzana"); //quita ultimo elemento

let x = frutas.shift(); // quita primer elemento

console.log(x);
console.log (frutas);

frutas.unshift("aaa"); // añade al inicio de un array
console.log (frutas);

frutas.splice(1,0,"pera"); // añade dentro de un array
console.log (frutas);

for (const element of frutas) {  // forof   imprime la lista
    console.log(element)
}

frutas.forEach(element => {  // foreach  imprime la lista
    console.log(element);
});

frutas.sort();
console.log(frutas);

frutas.sort().reverse();
console.log(frutas);

frutas.indexOf(kiwi): */


/* //Desarrollo-Web/UF1842-Web-Components/javascript /01.2-tipos.de.datos.actividad.js

let coches = ["Toyota", "Ferrari", "Mercedes"];
coches[1] = "Tesla"; 
coches.push("Chevrolet");

// Mostrar 'Mercedes'
console.log(coches[2]);

// Cambiar el primer elemento a 'BMW'

console.log(coches);
coches[0]=("BMW");
console.log(coches);


// Eliminar el último elemento usando pop()

coches.pop() ;
console.log(coches);



// Buscar el índice de 'BMW' usando IndexOf(...) - si no existe un valor, ¿que resultado consigues?

console.log(coches.indexOf('BMW'));

console.log(coches.indexOf('BMv'));

// Verificar si existe 'Toyota' en el array usando .includes(...). ¿Qué valor devuelve?

console.log(coches.includes('Tesla'));


console.log(coches.includes('tesla'));



// ¿Qué hace coches.sort(); y coches.reverse();?

console.log(coches.sort());

console.log(coches.sort().reverse());


//Desarrollo-Web/UF1842-Web-Components/javascript/03.1-forloops.js


// Mostrar el resultado de la suma de todos los numeros (50), usando for y/o foreach
const numbers = [5, 10, 15, 20];

numbers.forEach(element => {
    console.log(element);
   
});
 */


