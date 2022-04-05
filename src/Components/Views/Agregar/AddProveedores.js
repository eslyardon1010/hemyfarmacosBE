import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import "./AddClientes.css"
import { useNavigate } from "react-router-dom"; 

const AddProveedores = ({
  txtIdentidadValue,
  txtNombreValue,
  txtApellidoValue,
  txtDireccionValue,
  txtTelefonoValue,
  txtEmailValue,
  onChange: onChangeHandler,
  errorTxtIdentidad,
  errorNombre,
  onConfirmClick,
  onCancelClick
})=> {
  let navigate = useNavigate();
  return (
    <Page header={(<h2>&nbsp;Crear Proveedores</h2>)} footer={<Nav />}>
      <section className="align">
      <section className = "container-add"> 
        <Input
          label="Identidad"
          type="text"
          name="txtIdentidad"
          placeholder="Identidad "
          value={txtIdentidadValue}
          error={errorTxtIdentidad}
          onChange={onChangeHandler}
        />
        <Input
          label="Nombre"
          type="text"
          name="txtNombre"
          placeholder="Nombre"
          value={txtNombreValue}
          error={errorNombre}
          onChange={onChangeHandler}
        />
       
         <Input
          label="Apellido"
          type="text"
          name="txtApellido"
          placeholder="Apellido"
          value={txtApellidoValue}
          onChange={onChangeHandler}
        />
        <Input
          label="Direccion"
          type="text"
          name="txtDireccion"
          placeholder="Direccion"
          value={txtDireccionValue}
          onChange={onChangeHandler}
        />
         <Input
          label="Telefono"
          type="text"
          name="txtTelefono"
          placeholder="Telefono"
          value={txtTelefononValue}
          onChange={onChangeHandler}
        />
         <Input
          label="Email"
          type="text"
          name="txtEmail"
          placeholder="Email"
          value={txtEmailValue}
          onChange={onChangeHandler}
        />

        <PrimaryButton onClick={onConfirmClick}>
         Guardar
        </PrimaryButton>
        <SecondaryButton  onClick={() => navigate("/clientes")}>
          Cancelar
        </SecondaryButton>
      </section>
      </section>
    </Page>
  );
}

export default AddProveedores;


