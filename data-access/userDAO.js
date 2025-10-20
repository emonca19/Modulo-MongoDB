import { ObjectId } from 'mongodb';
import db from '../config/db.js';

export default class UserDAO {
    constructor() {
        this.db = new db();
        this.collection = this.db.obtenerColeccion('users');
    }

    async crear(usuario) {
        const result = await this.collection.insertOne(usuario);
        return result.insertedId;
    }

    async obtenerTodos() {
        const usuarios = await this.collection.find().toArray();
        return usuarios;
    }

    async obtenerPorId(id) {
        const usuario = await this.collection.findOne({ _id: new ObjectId(id) });
        return usuario;
    }

    async actualizar(id, nuevoUsuario) {
        await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: nuevoUsuario });
        return 'Usuario actualizado correctamente';
    }

    async eliminar(id) {
        const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
        return result;
    }
}