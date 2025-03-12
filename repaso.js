/* crear una funcion para calcular el area de un rectangulo.
Por ejemplo area (3,4) = 12*/

function recArea (x , y) { // x, y son parametros
    return x * y;
}
const r =recArea (3, 4); // 3, 4 son argumentos
console.log (r);

/* crear una funcion para repetir x veces basado en :*/

function repeatMessage (p, q) {
    return p.repeat(q)
}

const mensaje = repeatMessage("Hola! ", 3);
console.log(mensaje)


/* crear una funcion recursiva para sumar los numeros de cada dos
Por ejemplo, sumar segundo*/

function sumarDos (n) {
    if (n<=0) {
        return 0
    } else {
        return n +sumarDos (n-2)
    }
}
console.log(sumarDos(23));

/* que valor obtenemos ????  y porque*/

let val = 10;

function modificarVal(x) {
    x = x * 2
    console.log("Dentro de la funcion:", x);
}
modificarVal(val);
console.log(val);  // valor 10 , valores primitivos no se alteran

//------------------------------------------------------------------------------

let val1 = {width : 5};

function modificarObject(obj) {
    obj.width = obj.width * 2
    console.log("Dentro de la funcion:", obj);
}
modificarObject(val1);
console.log(val1); // valor width : 10  , valores complejos se alteran

//--------------------------------------------------------------------------------

// funciones anonimas

function sumar(a, b) {  // esta funcion tradicional se puede expresar 
    return a+b
}

const sumar1 = (a,b) => { return a + b;}
console.log(sumar1(10,20))

//---------------------------------------------------------------------------------

// practica 1

function saludo(nombre, edad) {
    if (edad >= 18) {
      return `Hola, ${nombre}. Eres mayor de edad.`;
    } else {
      return `Hola, ${nombre}. Eres menor de edad.`;
    }
  }
console.log(saludo("jose", 60));


const saludo1=(nombre1, edad1) => {
    if (edad1 >=18) {
        return `Hola, ${nombre1}. Eres mayor de edad.`;};
        return `Hola, ${nombre1}. Eres menor de edad.`;}

console.log(saludo1("pp", 15));
