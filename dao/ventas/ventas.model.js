const ObjectId = require('mongodb').ObjectId;
const getDb = require('../mongodb');

let db = null;

class Ventas {
    collection = null;
    constructor() {
      getDb()
        .then((database) => {
          db = database;
          this.collection = db.collection('Ventas');
          if (process.env.MIGRATE === 'true') {
            // Por Si se ocupa algo
          }
        })
        .catch((err) => { console.error(err) });
    }


    //VENTA NUEVA
    async new(fecha, codigoVenta, idCliente, nombreCliente,idMedicamento, nombreMedicamento, cantidad, precio, subtotal, isv, descuento, total, userId) {
        const newVenta = {
            fecha: new Date().getTime(),
            codigoVenta, 
            idCliente, 
            nombreCliente, 
            idMedicamento, 
            nombreMedicamento,
            cantidad, 
            precio, 
            subtotal,
            isv, 
            descuento, 
            total,
            createdBy: userId,
        };
        const rslt = await this.collection.insertOne(newVenta);
        return rslt;
      }


      //MOSTRAR TODAS LAS VENTAS 
      async getAll() {
        const cursor = this.collection.find({});
        const documents = await cursor.toArray();
        return documents;
      }

      
      //MOSTRAR CLIENTES POR PAGINAS 
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

       //ACTUALIZAR UNA VENTA 
  async updateOne(id, fecha, codigoVenta, idCliente, nombreCliente, idMedicamento, nombreMedicamento, cantidad, precio, subtotal,  isv, descuento, total) {
    const filter = {_id: new ObjectId(id)};
    const updateCmd = {
      '$set':{
        fecha: new Date().getTime(),
        codigoVenta, 
        idCliente, 
        nombreCliente, 
        idMedicamento, 
        nombreMedicamento, 
        cantidad, 
        precio, 
        subtotal,
        isv, 
        descuento, 
        total, 
        createdBy: userId,
      }
    };
    return await this.collection.updateOne(filter, updateCmd);
  }

//ELIMINAR UNA VENTA -------PENDIENTE-------------
async deleteOne(id) {
    
}

}

module.exports = Ventas;