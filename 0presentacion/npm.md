pagina de consulta de express

https://www.npmjs.com/package/express

Primera cosa, crear el package jason archivo

npm init -y  (con -y no hace preguntas) crea el {} package.json

{
  "name": "desarrollo_web_w3",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}




ejecucion como en Life server.....  entorno node  

    npm install --save-dev nodemon


movimiento entre paginas....

import express from 'express'

const app = express();

app.get('/', (req, res) => {

    res.send(`
        <html>  
        <a href='/aboutus'>Ir a sobre nosotros</a>  
        </html> `
    );
});

app.get('/aboutus', (req, res) => {

    res.send(`
        <html>  
            <a href='/'> Ir a Inicio</a>
        </html>`      
        
    );

});


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});