
import { useState } from 'react';
import { privateAxios} from '../../../Lib/apiClient';
import AddMedicamentos from './AddMedicamentos';

const AddMedicamentosPage = ()=>{
  const [txtCodigo, setTxtCodigo] = useState('');
  const [txtNombre, setTxtNombre] = useState('');
  const [txtCosto, setTxtCosto] = useState('');
  const [txtCantidad, setTxtCantidad] = useState('');
  const [txtFechaVencimiento, setTxtFechaVencimiento] = useState('');
  
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtCodigo':
        setTxtCodigo(value);
        break;
      case 'txtNombre':
        setTxtNombre(value);
        break;
      case 'txtCosto':
         setTxtCosto(value);
         break;
     case 'txtCantidad':
         setTxtCantidad(value);
         break;
     case 'txtFechaVencimiento':
         setTxtFechaVencimiento(value);
         break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        '/api/v1/medicamentos/new',
        {
          codigo: txtCodigo,
          nombre: txtNombre,
          costo: txtCosto,
          cantidad: txtCantidad,
          fechaVencimiento: txtFechaVencimiento
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
      <AddMedicamentos
        txtCodigoValue={txtCodigo}
        txtNombreValue={txtNombre}
        txtCostoValue={txtCosto}
        txtCantidadValue={txtCantidad}
        txtFechaVencimientoValue={txtFechaVencimiento}
        onChange={onChangeHandler}
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default  AddMedicamentosPage;
