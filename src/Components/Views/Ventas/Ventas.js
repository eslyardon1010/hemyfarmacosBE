
import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";

import { PrimaryButton } from "../../UX/Forms/Button";


const Ventas = ({ventas})=>{
  
  return (
    <Page header={<h2>Medicamentos</h2>} footer={<Nav/>}>
        <PrimaryButton className="mover" onClick={() =>console.warn("HOLA")}>
       Agregar
       <img className="btnAgregar" src="https://i.ibb.co/0skfdFF/plus.png" alt="" />
      </PrimaryButton>
       <table className="table-1"> 
     <thead>
<th>Fecha</th>
<th>Codigo</th>
<th>Identidad</th>
<th>Nombre</th>
<th>CodigoMed</th>
<th>Medicamento</th>
<th>Cantidad</th>
<th>Precio</th>
<th>Subtotal</th>
<th>Isv</th>
<th>Descuento</th>
<th>Total</th>
<th>Vendedor</th>

    </thead>
     </table>
      {
      ventas?.map((o)=>{
          return <VentaItem key={o._id} venta={o} />
        })
      }
    </Page>
  );
}
const VentaItem = ({venta})=>{
  return (
    
    <section>
      <table>
        <tbody>
          <td>{venta.fecha}</td>
          <td>{venta.codigoVenta}</td>
          <td>{venta.idCliente}</td>
          <td>{venta.nombreCliente}</td>
          <td>{venta.idMedicamenti}</td>
          <td>{venta.nombreMedicamento}</td>
          <td>{venta.cantidad}</td>
          <td>{venta.precio}</td>
          <td>{venta.subtotal}</td>
          <td>{venta.isv}</td>
          <td>{venta.descuento}</td>
          <td>{venta.total}</td>

            <td>
              <button className="btneliminar">
              <img src="https://i.ibb.co/JdmBTkt/delete.png" alt="" />
              </button>
             </td>
             <td>
               EDITAR
             </td>
        </tbody>
      </table>
    </section>
  );
}


export default Ventas;