import { useState } from 'react';
import { privateAxios, publicAxios } from '../../../Lib/apiClient';
import AddVentas from './AddVentas';

const AddVentasPage = ()=>{
  const [txtFecha, setTxtFecha] = useState('');
  const [txtCodigo, setTxtCodigo] = useState('');
  const [txtIdCliente, settxtIdCliente] = useState('');
  const [txtNombreCliente, settxtNombreCliente] = useState('');
  const [txtIdMedicamento, setTxtIdMedicamento] = useState('');
  const [txtNombreMedicamento, setTxtNombreMedicamento] = useState('');
  const [txtCantidad, setTxtIdCantidad] = useState('');
  const [txtPrecio, setTxtPrecio] = useState('');
  const [txtSubtotal, setTxtSubtotal] = useState('');
  const [txtIsv, setTxtIsv] = useState('');
  const [txtDescuento, setTxtDescuento] = useState('');
  const [txtTotal, setTxtTotal] = useState('');
  
  
  
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtFecha':
        setTxtFecha(value);
        break;
      case 'txtCodigo':
        setTxtCodigo(value);
        break;
      case 'txtIdCliente':
         settxtIdCliente(value);
         break;
     case 'txtNombreCliente':
        settxtNombreCliente(value);
         break;
     case 'txtNombreMedicamento':
         setTxtNombreMedicamento(value);
         break;
         case 'txtIdMedicamento':
         setTxtIdMedicamento(value);
         break;
         case 'txtIdCantidad':
          setTxtIdCantidad(value);
         break;
     case 'txtIdPrecio':
      setTxtPrecio(value);
         break;
         case 'txtSubtotal':
          setTxtSubtotal(value);
             break;
             case 'txtIsv':
          setTxtIsv(value);
             break;
             case 'txtDescuento':
              setTxtDescuento(value);
                 break;
                 case 'txtTotal':
                  setTxtTotal(value);
                     break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        '/api/v1/ventas/new',
        {
             fecha: txtFecha, 
             codigoVenta: txtCodigo,
             idCliente: txtIdCliente, 
             nombreCliente: txtNombreCliente,
             idMedicamento: txtIdMedicamento,
             nombreMedicamento: txtNombreMedicamento,
             cantidad: txtCantidad,
             precio: txtPrecio, 
             subtotal: txtSubtotal, 
             isv: txtIsv,
             descuento: txtDescuento, 
             total: txtTotal, 
        }
      );
      console.log('Signin Request: ', data)
    } catch(ex) {
      console.log('Error on Sigin submit', ex);
    }
  }
  const onCancel = (e)=>{
    e.preventDefault();
    e.stopPropagation();

  }
  // const onChangeHandler = (e) => {
  //   const {name, value} = e.target;
  // }
  return (
    <>
      <AddVentas
        txtFechaValue = {txtFecha}
        txtCodigoValue = {txtCodigo}
        txtIdClienteValue= {txtIdCliente}
        txtNombreClienteValue = {txtNombreCliente}
        txtIdMedicamentoValue= {txtIdMedicamento}
        txtNombreMedicamentoValue = {txtNombreMedicamento}
        txtCantidadValue= {txtCantidad}
          txtPrecioValue = {txtPrecio}
          txtSubtotalValue = {txtSubtotal}
          txtIsvValue= {txtIsv}
          txtDescuentoValue ={txtDescuento}
          txtTotalValue = {txtTotal}
        onChange={onChangeHandler}
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default  AddVentasPage;