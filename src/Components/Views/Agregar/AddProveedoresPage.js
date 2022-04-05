
import { useState } from 'react';
import { privateAxios, publicAxios } from '../../../Lib/apiClient';
import AddProveedores from './AddProveedores';

const AddProveedoresPage = ()=>{
  const [txtIdentidad, setTxtIdentidad] = useState('');
  const [txtNombre, setTxtNombre] = useState('');
  const [txtApellido, setTxtApellido] = useState('');
  const [txtDireccion, setTxtDireccion] = useState('');
  const [txtTelefono, setTxtTelefono] = useState('');
  const [txtEmail, setTxtEmail] = useState('');
  const onChangeHandler = ({target: {name, value}})=>{
    switch (name) {
      case 'txtIdentidad':
        setTxtIdentidad(value);
        break;
      case 'txtNombre':
        setTxtNombre(value);
        break;
      case 'txtApellido':
         setTxtApellido(value);
         break;
     case 'txtDireccion':
         setTxtDireccion(value);
         break;
    case 'txtTelefono':
         setTxtTelefono(value);
         break;
     case 'txtEmail':
         setTxtEmail(value);
         break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        '/api/v1/proveedores/new',
        {
          identidad: txtIdentidad,
          nombre: txtNombre,
          apellido: txtApellido,
          direccion: txtDireccion,
          telefono:txtTelefono,
          email: txtEmail

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
      <AddProveedores
        txtIdentidadValue={txtIdentidad}
        txtNombreValue={txtNombre}
        txtApellidoValue={txtApellido}
        txtDireccionValue={txtDireccion}
        txtTelefonoValue={txtTelefono}
        txtDEmailValue={txtEmail}
        onChange={onChangeHandler}
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default  AddProveedoresPage;
