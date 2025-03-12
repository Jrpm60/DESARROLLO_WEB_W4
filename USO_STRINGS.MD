// emplear: replace(), toUpperCase(), trim(), concat(), split(), toLowerCase(), repeat()



let str = "   Hello, World!   ";
// resultado esperado; 'Hello, World!


    variable.trim()


let str = "Hello, Javascript!";
// resultado esperado; 'Hola, Javascript!

    variable.replace("Hello", "Hola");


let str = "Hello, World!";
// resultado esperado; 'HELLO, WORLD!'

    str.toUpperCase();

// resultado esperado; 'hello, world!'

    str.toLowerCase();


let str = "Hello";
// resultado esperado; ['H', 'e', 'l', 'l', 'o']

    str.split("");


let str = "apple,banana,orange";
// resultado esperado; ['apple', 'banana', 'orange']

    str.split(",");


let str1 = "Hello";
let str2 = "World";

// resultado esperado; 'Hello, World!'

str=str1+","+str2+"!"

${str1},${str2}

str1.concat(",", str2, "!")

let str = "Hi! ";
// resultado esperado; 'Hi! Hi! Hi! '


str.repeat(3);



// -------------------------

// Qué resultado esperas?
let str = "Hello, World!";
console.log(str.startsWith("Hello"));  
console.log(str.endsWith("World!"));  
console.log(str.startsWith("World"));  

// Qué resultado esperas?
let str = "Hello, World!";
console.log(str.includes("World"));  
console.log(str.includes("JavaScript")); 