const express = require('express');
const router = express.Router();

const Ventas = require('../../../../dao/ventas/ventas.model');
const ventasModel = new Ventas();

router.get('/', (req, res) => {
    res.status(200).json(
      {
        endpoint: 'Ventas',
        updates: new Date(2022,02,28,19,16,0)
      }
    );
  }); //GET /
  
  router.get('/all', async (req, res) => {
    try {
      console.log("User Request", req.user);
      const rows = await  ventasModel.getAll();
      res.status(200).json({status:'ok', venta: rows});
    } catch (ex) {
      console.log(ex);
      res.status(500).json({status:'failed'});
    }
  } );

  // /byid/1;
router.get('/byid/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const row = await ventasModel.getById(id);
      res.status(200).json({ status: 'ok', venta: row });
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ status: 'failed' });
    }
  });
  
  const allowedItemsNumber = [10, 15, 20];
  //facet search
  router.get('/facet/:page/:items', async (req, res) => {
    const page = parseInt(req.params.page, 10);
    const items = parseInt(req.params.items, 10);
    if (allowedItemsNumber.includes(items)) {
      try {
        const ventas = await ventasModel.getFaceted(page, items);
        res.status(200).json({docs:ventas});
      } catch (ex) {
        console.log(ex);
        res.status(500).json({ status: 'failed' });
      }
    } else {
      return res.status(403).json({status:'error', msg:'Not a valid item value (10,15,20)'});
    }
  
  });

  


  router.post('/new', async (req, res) => {
    const {fecha, codigoVenta, idCliente, nombreCliente, idMedicamento, nombreMedicamento, cantidad, precio, subtotal, isv, descuento, total, userId} = req.body;
    try {
      rslt = await ventasModel.new(fecha, codigoVenta, idCliente, nombreCliente, idMedicamento, nombreMedicamento, cantidad, precio, subtotal, isv, descuento, total, userId);
      res.status(200).json(
        {
          status: 'ok',
          result: rslt
        });
    } catch (ex) {
      console.log(ex);
      res.status(500).json(
        {
          status: 'failed',
          result: {}
        });
    }
  }); //POST /new


  //router.put();
router.put('/update/:id', async (req, res) => {
    try{
      const { fecha, codigoVenta, idCliente, nombreCliente, idMedicamento, nombreMedicamento, cantidad, precio, subtotal, isv, descuento, total, userId } = req.body;
      const { id } = req.params;
      const result = await ventasModel.updateOne(id, fecha, codigoVenta, idCliente, nombreCliente, idMedicamento, nombreMedicamento, cantidad, precio, subtotal, isv, descuento, total, userId);
      res.status(200).json({
        status:'ok',
        result
      });
    } catch(ex){
      console.log(ex);
      res.status(500).json({ status: 'failed' });
    }
  });
  
  //router.delete();
router.delete('/delete/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await ventasModel.deleteOne(id);
      res.status(200).json({
        status: 'ok',
        result
      });
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ status: 'failed' });
    }
  });
  
module.exports = router;