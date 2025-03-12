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
        return(`ting ting ting de las  ${this.cuerdas}`);  // tocar es un Metodo
    }
    tocarALTO() {
        return(`ting ting ting de las  ${this.cuerdas}`.toUpperCase());  // tocarALTO es un Metodo
    }
    tocarMuyFuerte() {
        this.cuerdas -=1 ;
        return(`tong   ${this.cuerdas}`.toUpperCase());  // tocarALTO es un Metodo
    }
 }

class GuitarraElectrica extends Guitarra {    // clase hijo de Guitarra (Padre)
    constructor(marca, cuerdas, distorsion) {  // marca, cuerdas son atributos
        super(marca, cuerdas);
        this.distorsion = distorsion;
    }

    enchufar() {
        return("Esta enchifado");

    }

    tocarALTO () {
        if (this.distorsion === true)
            return("DistorsiOOOOOOOOON");



    }

}

// module.exports = { Guitarra, GuitarraElectrica} ;  // In Node.js  ( CommonJS)

// export default Guitarra;

// export {Guitarra} ;

export {Guitarra, GuitarraElectrica} ;




