require('dotenv').config();
const getDb = require('../dao/mongodb');
console.log(process.env.MONGOURI);
const names = [
  'Juan',
  'Pedro',
  'Luis',
  'Lulu',
  'Juana',
  'Paco',
  'Hugo',
  'Donaldo'
  ];

  const surnames = [
    'Perez',
    'Sanchez',
    'Lopez',
    'Morales',
    'Ardon',
    'Caceres',
    'Santos',
    'Cruz'
  ];

  const direc = [
    'Bo el Carmen',
    'Bo Santa Eduvijes',
    'Bo La Lopez',
    'Santa Rosa',
    'San Pedro',
    'Gracias',
    'El Rosario',
    'El Centro'
  ];

  const clientes = 50;
  const clientesArr = [];

  for (var i = 0; i < clientes; i++) {
    const anio = ((new Date().getTime() % 2) === 0) ? 1980 + Math.floor(Math.random() * 20) : 2000 + Math.floor(Math.random() * 23);
    const secuencia = String(Math.ceil(Math.random() * 99999)).padStart(5,'0');
    const nombre = names[Math.floor(Math.random() * 8)];
    const apellido = surnames[Math.floor(Math.random() * 8)];
    const direccion = direc[Math.floor(Math.random() * 8)];
    const telefono = `${(20000000 + Math.floor(Math.random() * 10000000))}`;
    const doc = {
      nombre,
      apellido,
      identidad: `0801${anio}${secuencia}`,
      telefono,
      direccion
    }
   clientesArr.push(doc);
  }

  getDb().then(
    (db)=>{
      const clientes = db.collection('Clientes');
      clientes.insertMany(clientesArr, (err, rslts)=>{
        if(err){
          console.log(err);
          return;
        }
        console.log(rslts);
        return;
      });
    }
  );