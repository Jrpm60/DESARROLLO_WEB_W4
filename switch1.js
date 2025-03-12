
/* let isLoggedIn = true;

switch (isLoggedIn) {
    case true:
        console.log( "bienvenido");
        break;
    case false:
        console.log (" tienes que registrarte")
        break;
    default :
        console.error ("entrada invalida")
} */

/* console.log(isLoggedIn ? "Bienvenido!" : "Porfavor, inicia sesion") */

let fruta = "kiwi";

/* switch (fruta) {
    case "manzana":
    case "pera":
      console.log("Es una fruta normal.");
      break;
    case "banana":
    case "mango":
      console.log("Es una fruta tropical.");
      break;
    default:
      console.log("No conozcom esa fruta");

  } */


// Errores típicos de Javascript (known bugs)

let resp = 0.1 + 0.2 // ¿Qué esperas?

console.log(resp); //0.30000000000000004

let resp1= (0.1 + 0.2).toFixed(2);

console.log(resp1);

let resp3 = Math.round((0.1 + 0.2) * 100) / 100;

console.log(resp3);
 