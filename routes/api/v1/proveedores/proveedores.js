const express = require('express');
const router = express.Router();

const Proveedores = require('../../../../dao/proveedores/proveedores.model');
const proveedoresModel = new Proveedores();


router.get('/', (req, res) => {
  res.status(200).json(
    {
      endpoint: 'Proveedores',
      updates: new Date(2022,02,20,20,41,0)
    }
  );
}); //GET /

router.get('/all', async (req, res) => {
  try {
    console.log("User Request", req.user);
    const rows = await proveedoresModel .getAll();
    res.status(200).json({status:'ok', proveedor: rows});
  } catch (ex) {
    console.log(ex);
    res.status(500).json({status:'failed'});
  }
} );
// /byid/1;
router.get('/byid/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const row = await proveedoresModel.getById(id);
    res.status(200).json({ status: 'ok', proveedor: row });
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
      const proveedores = await proveedoresModel.getFaceted(page, items);
      res.status(200).json({docs:proveedores});
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ status: 'failed' });
    }
  } else {
    return res.status(403).json({status:'error', msg:'Not a valid item value (10,15,20)'});
  }

});

router.get('/byname/:name/:page/:items', async (req, res) => {
  const name = req.params.name;
  const page = parseInt(req.params.page, 10);
  const items = parseInt(req.params.items, 10);
  if (allowedItemsNumber.includes(items)) {
    try {
      const proveedores = await proveedoresModel.getFaceted(page, items, {nombres: name});
      res.status(200).json({ docs: proveedores });
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ status: 'failed' });
    }
  } else {
    return res.status(403).json({ status: 'error', msg: 'Not a valid item value (10,15,20)' });
  }

});



router.post('/new', async (req, res) => {
  const {identidad, nombre, apellido, direccion, telefono, email} = req.body;
  try {
    rslt = await proveedoresModel.new(identidad, nombre, apellido, direccion, telefono, email);
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
    const { identidad, nombre, apellido, direccion, telefono, email } = req.body;
    const { id } = req.params;
    const result = await proveedoresModel.updateOne(id, id, identidad, nombre, apellido, direccion, telefono, email);
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
    const result = await proveedoresModel.deleteOne(id);
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