import AddClientes from './AddClientes';
import { useState } from 'react';
import { privateAxios, publicAxios } from '../../../Lib/apiClient';

const AddClientesPage = ()=>{
  const [txtIdentidad, setTxtIdentidad] = useState('');
  const [txtNombre, setTxtNombre] = useState('');
  const [txtApellido, setTxtApellido] = useState('');
  const [txtTelefono, setTxtTelefono] = useState('');
  const [txtDireccion, setTxtDireccion] = useState('');
  
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
     case 'txtTelefono':
         setTxtTelefono(value);
         break;
     case 'txtDireccion':
         setTxtDireccion(value);
         break;
    }
  }
  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
      const data = await privateAxios.post(
        '/api/v1/clientes/new',
        {
          identidad: txtIdentidad,
          nombre: txtNombre,
          apellido: txtApellido,
          telefono: txtTelefono,
          direccion: txtDireccion
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
        txtTelefonoValue={txtTelefono}
        txtDireccionValue={txtDireccion}
        onChange={onChangeHandler}
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default  AddClientesPage;
