import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';  // __dirname no esta disponible con ES Modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Incluir el middleware static
// Recordar que los htmls no estan dentro de /public/css y /public/images y /public/js
// Colgar los html en una carpeta views

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

// middleware _____________________________
function logger(req, res, next) {
    console.log(`LOGGER: ${req.url}`);
    next();
}
app.use(logger) 

// Middleware ______________________________

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'adivinanza.html')); 
  });

  //prueba para captar querystrings

  app.get('/querystring', (req, res) => {
    console.log("querystring");
    res.json({resultado: 'ok'})
    console.log(`${req.url} y ${req.method}`);

  // obtener querystings
    console.log(req.query);
    const {nombre, edad, pais} =req.query ;


    if (nombre && edad) {
        console.log("Tenemos los Tres querystrings");
        console.log(`${nombre} y ${edad} y ${pais}`);
    }
    else {
        console.log("Ojo, no tenemos los tres QueryStrings");
    }

});







app.get('/win', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'win.html')); 
});

app.get('/lose', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'lose.html')); 
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'registro_usu.html')); 
});

app.post('/registro', (req, res) => {
    console.log('POST');
    const {nombre, usuario, password, password1 } = req.body;

    console.log(`nombre ${nombre}`)
    console.log(`usuario ${usuario}`)
    console.log(`password ${password}`)
    console.log(`password1 ${password1}`)

    if (password === password1) {
        if (password === "11" && usuario === "pp") {
            res.json({Resultado: 'Acceso permitido'});
        }
        else {
            res.json({Resultado: 'Acceso RECHAZADO'});
        }
    }
    else {
        res.json({Resultado: 'Las contraseñas no coinciden'});
    }  

       

     
});








app.use((req, res) => {
    res.status(404).send('Error pagina no existe')
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
