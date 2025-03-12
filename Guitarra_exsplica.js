class Guitarra {
    #precioDeCoste = 100;  // # encapsulacion - privado

    constructor(marca, cuerdas) {  // marca, cuerdas son atributos
        this.marca = marca ;
        this.cuerdas = cuerdas;
    }

    mostrarPrecioDeVenta () {
        return this.#precioDeCoste * 1.2;
    }

    tocar() {
        console.log(`ting ting ting de las  ${this.cuerdas}`);  // tocar es un Metodo
    }

    tocarALTO() {
        console.log(`ting ting ting de las  ${this.cuerdas}`.toUpperCase());  // tocarALTO es un Metodo
    }

    tocarMuyFuerte() {
        this.cuerdas -=1 ;
        console.log(`tong   ${this.cuerdas}`.toUpperCase());  // tocarALTO es un Metodo
    }
 
}

class GuitarraElectrica extends Guitarra {    // clase hijo de Guitarra (Padre)
    constructor(marca, cuerdas, distorsion) {  // marca, cuerdas son atributos
        super(marca, cuerdas);
        this.distorsion = distorsion;
    }

    enchufar() {
        console.log("Esta enchifado");

    }

    tocarALTO () {
        if (this.distorsion === true)
            console.log("DistorsiOOOOOOOOON");



    }

}



//=====================   de aqui en adelante se declararia en otro archivo ============




// uSAR OBJETOS

const guitar = new Guitarra ("Fender", 6); // instanciar el Objeto  - guitar

//Abstraccion

console.log(guitar.marca);
guitar.marca = "Les Paul";
console.log(guitar.marca);
console.log(guitar.cuerdas);

guitar.tocar();

guitar.tocarALTO();

guitar.tocarMuyFuerte();
console.log(guitar.cuerdas);

guitar.tocarMuyFuerte();
console.log(guitar.cuerdas);

//ENCAPSULACION

console.log(guitar.mostrarPrecioDeVenta());

//HERENCIA

const ge = new GuitarraElectrica("Fender", 6, true );
console.log(ge.cuerdas);
console.log(ge.distorsion);
ge.tocar();
ge.enchufar();


//POLIMORFISMO

guitar.tocarALTO();
ge.tocarALTO();






