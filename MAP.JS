const numeros = [1, 2, 3, 4, 5]; // Array de numeros
const frutas = ['melocoton', 'pera','cereza']; // Array de frutas

const n = numeros.map((numero, index) => { 
    return `Numero: ${numero} y index: ${index}`
    });
console.log(n);

// RESULTADO
//[
//  'Numero: 1 y index: 0',
//  'Numero: 2 y index: 1',
//  'Numero: 3 y index: 2',
//  'Numero: 4 y index: 3',
//  'Numero: 5 y index: 4'
//  ]


const m = frutas.map((frutas, index) => { 
    return `Numero: ${frutas} y index: ${index}`
    });

const mayu = frutas.map( fruta => fruta.toUpperCase() );
console.log(mayu);

//[ 'MELOCOTON', 'PERA', 'CEREZA' ]

//------------------------------------------------------------------
const nombres = [ 'Juan', 'Ana', 'Luis', 'Carlitos', 'Maria']

const datos = nombres.map((nombres, index) => { 
    return `El nombre: ${nombres} tiene ${nombres.length} y esta en la posicion: ${index}`
    });

console.log(datos);

// Resultado
//[
//   'El nombre: Juan tiene 4 y esta en la posicion: 0',
//   'El nombre: Ana tiene 3 y esta en la posicion: 1',
//    'El nombre: Luis tiene 4 y esta en la posicion: 2',
//    'El nombre: Carlitos tiene 8 y esta en la posicion: 3',
//    'El nombre: Maria tiene 5 y esta en la posicion: 4' 
// ]
//-------------------------------------------------------------------

const filtro = nombres.map (nombre  => { 
        if (nombre.length <=3 ) {
            return(nombre);
        }
});

console.log(filtro);





