import {Ropa} from './Ropa.js';


const miRopa = new Ropa('Pantalon', 'XL', "15%");



// Get buttons from the DOM
const sacarExposicion = document.getElementById('sacarExposicion');



// Add event listeners for button clicks
perroButton.addEventListener('click', () => {
    miRopa.sacarExposicion();  
});

