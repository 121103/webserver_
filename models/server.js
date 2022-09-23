const express = require('express')
const cors = require('cors');
const { dbConection } = require('../database/config_db');

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        //conexion BD
        this.conectarBD()
        this.middleware();
        this.routes();


    }
    middleware(){
        //DIRECTORIO PUBLICO
        this.app.use(express.static('public'));
        //CORS
        this.app.use(cors());
        //LECTURA Y PARSEO DEL BODY
        this.app.use(express.json())
    }

    async conectarBD(){
        await dbConection()
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
    
    routes(){
        this.app.use('/api/usuarios', require('../routes/usuario'))
    }
}



module.exports = Server;