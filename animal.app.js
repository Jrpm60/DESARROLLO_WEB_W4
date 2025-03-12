import {Perro} from './Animal.js';
import {Gato} from './Animal.js'; 

// Create a Dog instance
const miPerro = new Perro('Niebla', 'San Bernardo');
const miGato = new Gato('Michi', 'Siames');


// Get buttons from the DOM
const perroButton = document.getElementById('perroButton');
const gatoButton = document.getElementById('gatoButton');


// Add event listeners for button clicks
perroButton.addEventListener('click', () => {
    miPerro.hablar();  // Llamar al método de la clase Perro
});

gatoButton.addEventListener('click', () => {
    miGato.hablar();  // Llamar al método de la clase Gato
});