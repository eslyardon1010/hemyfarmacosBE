require('dotenv').config();
const getDb = require('../dao/mongodb');
console.log(process.env.MONGOURI);
const names = [
  'Belatacept',
  'Belzutifan',
  'Benzonatato',
  'Benzotropina',
  'Cefprozilo',
  'Ceftazidima',
  'Celecoxib',
  'Cefalexina',
  'Clorambucilo',
  'Darunavir',
  'Desloratadina',
  'Emedastina',
  'Enzalutamide',
  'Flavocoxid',
  'Flucytosine',
  'Fluocinonida',
  ];

  const precio = [
    50,
    100,
    150,
    200,
    15,
    58,
    96,
    25,
    89,
    12, 
    58,85,75,96,100, 95
  ];

  
  const fecha = [
    '10/10/2021',
    '05/08/2022',
    '01/02/2025',
    '06/06/2026',
    '19/05/2028',
    '23/02/2024',
    '15/12/2022',
    '16/11/2023',
    '21/10/2020',
    '23/01/2025',
    '24/03/2025',
    '29/08/2026',
    '13/09/2028',
    '31/07/2028',
    '30/06/2027',
    '28/12/2029',
  ];

  const medicamentos = 50;
  const medicamentosArr = [];

  for (var i = 0; i < medicamentos; i++) {
   const nombre = names[Math.floor(Math.random() * 16)];
    const costo = precio[Math.floor(Math.random() * 16)];
    const cantidad =`${(200 + Math.floor(Math.random() * 100))}`;
    const codigo = `${(2000 + Math.floor(Math.random() * 1000))}`;
    const fechaVencimiento = fecha[Math.floor(Math.random() * 16)];
   
    const doc = {
     codigo, 
     nombre, 
     costo, 
     cantidad, 
     fechaVencimiento
    }
    medicamentosArr.push(doc);
  }

  getDb().then(
    (db)=>{
      const medicamentos = db.collection('Medicamentos');
      medicamentos.insertMany(medicamentosArr, (err, rslts)=>{
        if(err){
          console.log(err);
          return;
        }
        console.log(rslts);
        return;
      });
    }
  );