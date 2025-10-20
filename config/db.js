import { MongoClient } from 'mongodb';

export default class Database {
    constructor() {
        this.uri = 'mongodb://127.0.0.1:27017/dbUsers';
        this.options = {};
        this.client = new MongoClient(this.uri, this.options)
    }

    async conectar() {
        try {
            await this.client.connect();
            console.log('Conexión a MongoDB Establecida')
        } catch (error) {
            throw error;
        }
    }

    desconectar() {
        try {
            this.client.close();
            console.log('Desconexion exitosa')
        } catch (error) {
            throw error;
        }
    }

    obtenerColeccion(nombre) {
        return this.client.db().collection(nombre);
    }
}