// funcion para sumar dos numeros

function sumar(a ,b) {
    let r= a + b ;
    return r;
}

let x = sumar (2,7)
// -------------------------------------

// factorial = Recursiva

//  3! = 3 * 2 * 1 = 6
//  4! = 4 * 3 * 2 * 1 = 24

function factorial (n) {
    if (n==0) {    // caso base - terminar
        console.log("fin")
        return 1
    }
    else {   //  caso recursividad - llamar de nuevo
        console.log(n);
        return n * factorial (n-1);
    }

}

const y = factorial(4); // 24
console.log(y);


// 5, 4, 3, 2, 1

function mostrar (m) {
    if (m === 0) {    // caso base - terminar
        console.log(m);
        return 1
    }
    else {   //  caso recursividad - llamar de nuevo
        console.log(m);
        return mostrar (m-1);
    }
}
mostrar(5);

