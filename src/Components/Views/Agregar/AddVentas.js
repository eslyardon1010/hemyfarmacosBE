import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import "./AddClientes.css"
import { useNavigate } from "react-router-dom"; 

const AddVentas = ({
  txtFechaValue,
  txtCodigoValue,
  txtIdClienteValue,
  txtNombreClienteValue,
  txtIdMedicamentoValue,
  txtNombreMedicamentoValue,
  txtCantidadValue,
    txtPrecioValue,
    txtSubtotalValue,
    txtIsvValue,
    txtDescuentoValue,
    txtTotalValue,
  onChange: onChangeHandler,
  errorTxtFecha,
  errorCodigo,
  onConfirmClick,
  onCancelClick
})=> {
  let navigate = useNavigate();
  return (
    <Page header={(<h2>&nbsp;Crear Venta</h2>)} footer={<Nav />}>
      <section className="align">
      <section className = "container-add"> 
        <Input
          label="Fecha"
          type="text"
          name="txtFecha"
          placeholder="Fecha "
          value={txtFechaValue}
          error={errorTxtFecha}
          onChange={onChangeHandler}
        />
        <Input
          label="Codigo"
          type="text"
          name="txtCodigo"
          placeholder="Codigo"
          value={txtCodigoValue}
          error={errorCodigo}
          onChange={onChangeHandler}
        />
       
         <Input
          label="IdCliente"
          type="text"
          name="txtIdCliente"
          placeholder="IdCliente"
          value={txtIdClienteValue}
          onChange={onChangeHandler}
        />
         <Input
          label="NombreCliente"
          type="text"
          name="txtNombreCliente"
          placeholder="NombreCliente"
          value={txtNombreClienteValue}
          onChange={onChangeHandler}
        />
        <Input
          label="IdMedicamento"
          type="text"
          name="txtIdMedicamento"
          placeholder="IdMedicamento"
          value={txtIdMedicamentoValue}
          onChange={onChangeHandler}
        />
            <Input
          label="NombreMedicamento"
          type="text"
          name="txtNombreMedicamento"
          placeholder="IdMedicamento"
          value={txtNombreMedicamentoValue}
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
          label="Precio"
          type="text"
          name="txtPrecio"
          placeholder="Precio"
          value={txtPrecioValue}
          onChange={onChangeHandler}
        />
        <Input
          label="Subtotal"
          type="text"
          name="txtSubtotal"
          placeholder="Subtotal"
          value={txtSubtotalValue}
          onChange={onChangeHandler}
        />
        <Input
          label="Isv"
          type="text"
          name="txtIsv"
          placeholder="Isv"
          value={txtIsvValue}
          onChange={onChangeHandler}
        />

<Input
          label="Descuento"
          type="text"
          name="txtDescuento"
          placeholder="Descuento"
          value={txtDescuentoValue}
          onChange={onChangeHandler}
        />
<Input
          label="Total"
          type="text"
          name="txtTotal"
          placeholder="Total"
          value={txtTotalValue}
          onChange={onChangeHandler}
        />

        <PrimaryButton onClick={onConfirmClick}>
         Guardar
        </PrimaryButton>
        <SecondaryButton  onClick={() => navigate("/ventas")}>
          Cancelar
        </SecondaryButton>
      </section>
      </section>
    </Page>
  );
}

export default AddVentas;