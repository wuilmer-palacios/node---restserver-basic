const express = require('express');
const cors = require ('cors');

class Server {

    constructor(){
        
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.middlewares();
        this.router();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y parse del body
        this.app.use( express.json() );
        
        //Rutas de mi aplicacion
        this.app.use(express.static('public'));
    }

    router() {
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto ${this.port}`)
        });
    }
}

module.exports = Server;