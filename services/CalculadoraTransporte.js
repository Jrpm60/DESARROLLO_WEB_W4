class CalculadoraTransporte {
    #tarifasPorTipo = {
        "patin": 0.15,
        "bicicleta": 0.10,
    };

    constructor(distancia, peso, tipo_transporte) {
        this.distancia = distancia;
        this.peso = peso;
        this.tipo_transporte = tipo_transporte;
    }

    calcularCoste() {
        const tarifa = this.#tarifasPorTipo[this.tipo_transporte];
        if (tarifa === undefined) {
            return "Tipo de transporte no válido"; 
        }
        const costeTotal = this.distancia * this.peso * tarifa;
        return costeTotal;
    }
}

export default  CalculadoraTransporte ;