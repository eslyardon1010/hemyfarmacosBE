const ObjectId = require('mongodb').ObjectId;
const getDb = require('../mongodb');

let db = null;

class Clientes {
  collection = null;
  constructor() {
    getDb()
      .then((database) => {
        db = database;
        this.collection = db.collection('Clientes');
        if (process.env.MIGRATE === 'true') {
          // Por Si se ocupa algo
        }
      })
      .catch((err) => { console.error(err) });
  }

  //CLIENTE NUEVO 
    async new(identidad, nombre, apellido, telefono, direccion) {
    const newCliente = {
        identidad, 
        nombre, 
        apellido, 
        telefono, 
        direccion
    };
    const rslt = await this.collection.insertOne(newCliente);
    return rslt;
  }

//TRAER TODOS LOS CLIENTES 
 async getAll() {
    const cursor = this.collection.find({});
    const documents = await cursor.toArray();
    return documents;
  }

  //TRAER CLIENTES POR PAGINA Y CANTIDAD DE ITEMS 
   async getFaceted(page, items, filter = {}) {
    const cursor = this.collection.find(filter);
    const totalItems = await cursor.count();
    cursor.skip((page -1) * items);
    cursor.limit(items);
    const resultados = await cursor.toArray();
    return {
      totalItems,
      page,
      items,
      totalPages: (Math.ceil(totalItems / items)),
      resultados
    };
  }

  //POR ID 
    async getById(id) {
    const _id = new ObjectId(id);
    const filter = {_id};
    console.log(filter);
    const myDocument = await this.collection.findOne(filter);
    return myDocument;
  }


  //ACTUALIZAR UN CLIENTE 
  async updateOne(id, identidad, nombre, apellido, telefono, direccion) {
    const filter = {_id: new ObjectId(id)};
    // UPDATE Clientes SET campo=valor, campo=valor where id= id;
    const updateCmd = {
      '$set':{
      identidad, 
      nombre, 
      apellido, 
      telefono, 
      direccion
      }
    };
    return await this.collection.updateOne(filter, updateCmd);
  }

  //ELIMINAR UN CLIENTE -------PENDIENTE-------------
   async deleteOne(id) {
    
  }

}
  module.exports = Clientes;