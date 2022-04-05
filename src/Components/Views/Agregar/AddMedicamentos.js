import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import "./AddClientes.css"
import { useNavigate } from "react-router-dom"; 

const AddMedicamentos = ({
  txtCodigoValue,
  txtNombreValue,
  txtCostoValue,
  txtCantidadValue,
  txtFechaVencimientoValue,
  onChange: onChangeHandler,
  onConfirmClick,
  onCancelClick
})=> {
  let navigate = useNavigate();
  return (
    <Page header={(<h2>&nbsp;Agregar Medicamentos</h2>)} footer={<Nav />}>
      <section className="align">
      <section className = "container-add-med"> 
        <Input
          label="Codigo"
          type="text"
          name="txtCodigo"
          placeholder="Codigo "
          value={txtCodigoValue}
          onChange={onChangeHandler}
        />
        <Input
          label="Nombre"
          type="text"
          name="txtNombre"
          placeholder="Nombre"
          value={txtNombreValue}
          onChange={onChangeHandler}
        />
       
         <Input
          label="Costo"
          type="text"
          name="txtCosto"
          placeholder="Costo"
          value={txtCostoValue}
          onChange={onChangeHandler}
        />
         <Input
          label="Cantidad"
          type="text"
          name="txtCantidad"
          placeholder="Cantidad"
          value={txtCantidadValue}
          onChange={onChangeHandler}
        />
        <Input
          label="FechaVencimiento"
          type="date"
          name="txtFechaVencimiento"
          placeholder="FechaVencimiento"
          value={txtFechaVencimientoValue}
          onChange={onChangeHandler}
        />

        <PrimaryButton onClick={onConfirmClick}>
         Guardar
        </PrimaryButton>
        <SecondaryButton  onClick={() => navigate("/Medicamentos")}>
          Cancelar
        </SecondaryButton>
      </section>
      </section>
    </Page>
  );
}

export default AddMedicamentos;
