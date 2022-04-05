import AddClientes from './AddClientes';
import { useState } from 'react';
import { privateAxios, publicAxios } from '../../../Lib/apiClient';

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
         setTxtApellido(value);
         break;
     case 'txtEmail':
         setTxtDireccion(value);
         break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        '/api/v1/Proveedores/new',
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
      <AddClientes
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

export default  AddClientesPage;
