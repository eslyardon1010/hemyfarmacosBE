import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import "./Ventas.css"
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
      
      <div id='wrapper'> 
      <form className='form'>
        <p className='field required half'>
        <Input className='text-input'
          label="Fecha"
          type="date"
          name="txtFecha"
          placeholder="Fecha "
          value={txtFechaValue}
          error={errorTxtFecha}
          onChange={onChangeHandler}
        />
        </p>
        <p className='field required half' >
        <Input  className='text-input'
          label="Codigo"
          type="text"
          name="txtCodigo"
          placeholder="Codigo"
          value={txtCodigoValue}
          error={errorCodigo}
          onChange={onChangeHandler}
        />
        </p>
        <p className='field required half' >
         <Input className='text-input'
          label="IdCliente"
          type="text"
          name="txtIdCliente"
          placeholder="IdCliente"
          value={txtIdClienteValue}
          onChange={onChangeHandler}
        />
        </p>
        <p className='field required half' >
         <Input  className='text-input'
          label="NombreCliente"
          type="text"
          name="txtNombreCliente"
          placeholder="NombreCliente"
          value={txtNombreClienteValue}
          onChange={onChangeHandler}
        />
        </p>
        <p className='field required half' >
        <Input  className='text-input'
          label="IdMedicamento"
          type="text"
          name="txtIdMedicamento"
          placeholder="IdMedicamento"
          value={txtIdMedicamentoValue}
          onChange={onChangeHandler}
        />
        </p>
        <p className='field required half'>
         <Input  className='text-input'
          label="NombreMedicamento"
          type="text"
          name="txtNombreMedicamento"
          placeholder="IdMedicamento"
          value={txtNombreMedicamentoValue}
          onChange={onChangeHandler}
        />
        </p>
        <p className='field required half'>
        <Input  className='text-input'
          label="Cantidad"
          type="text"
          name="txtCantidad"
          placeholder="Cantidad"
          value={txtCantidadValue}
          onChange={onChangeHandler}
        />
        </p>
         <p className='field required half'>
        <Input  className='text-input'
          label="Precio"
          type="text"
          name="txtPrecio"
          placeholder="Precio"
          value={txtPrecioValue}
          onChange={onChangeHandler}
        />
        </p>
        <p className='field required half'>
        <Input  className='text-input' 
          label="Subtotal"
          type="text"
          name="txtSubtotal"
          placeholder="Subtotal"
          value={txtSubtotalValue}
          onChange={onChangeHandler}
        />
        </p>
        <p className='field required half'>
        <Input  className='text-input'
          label="Isv"
          type="text"
          name="txtIsv"
          placeholder="Isv"
          value={txtIsvValue}
          onChange={onChangeHandler}
        />
        </p>
         <p className='field required half'>
        <Input  className='text-input'
          label="Descuento"
          type="text"
          name="txtDescuento"
          placeholder="Descuento"
          value={txtDescuentoValue}
          onChange={onChangeHandler}
        />
        </p>
        <p className='field required half'>
        <Input  className='text-input'
          label="Total"
          type="text"
          name="txtTotal"
          placeholder="Total"
          value={txtTotalValue}
          onChange={onChangeHandler}
        />
         </p>
         <p className='field'>
        <PrimaryButton  onClick={onConfirmClick}>
         Guardar
        </PrimaryButton>
        <SecondaryButton  onClick={() => navigate("/ventas")}>
          Cancelar
        </SecondaryButton>
        </p>
        </form>
      </div>
    </Page>
  );
}

export default AddVentas;