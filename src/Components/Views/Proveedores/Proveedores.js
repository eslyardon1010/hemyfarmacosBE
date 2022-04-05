
import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";

import { PrimaryButton } from "../../UX/Forms/Button";


const Proveedores = ({proveedores})=>{
  
  return (
    <Page header={<h2>Medicamentos</h2>} footer={<Nav/>}>
        <PrimaryButton className="mover" onClick={() =>console.warn("HOLA")}>
       Agregar
       <img className="btnAgregar" src="https://i.ibb.co/0skfdFF/plus.png" alt="" />
      </PrimaryButton>
       <table className="table-1"> 
     <thead>
<th>IDENTIDAD</th>
<th>NOMBRE</th>
<th>APELLIDO</th>
<th>DIRECCION</th>
<th>TELEFONO</th>
<th>EMAIL</th>
<th>ELIMINAR</th>
<th>EDITAR</th>
    </thead>
     </table>
      {
      proveedores?.map((o)=>{
          return <ProveedorItem key={o._id} proveedor={o} />
        })
      }
    </Page>
  );
}
const ProveedorItem = ({proveedor})=>{
  return (
    
    <section>
      <table>
        <tbody>
          <td>{proveedor.identidad}</td>
          <td>{proveedor.nombre}</td>
          <td>{proveedor.apellido}</td>
          <td>{proveedor.direccion}</td>
          <td>{proveedor.telefono}</td>
          <td>{proveedor.email}</td>
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


export default Proveedores;