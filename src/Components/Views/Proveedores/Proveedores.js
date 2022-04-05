
import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";

import { PrimaryButton } from "../../UX/Forms/Button";
import { privateAxios } from "../../../Lib/apiClient";
import { useNavigate } from "react-router-dom";

const Proveedores = ({proveedores})=>{
  const routerNavigator = useNavigate();
  return (
    <Page header={<h2>Medicamentos</h2>} footer={<Nav/>}>
        <PrimaryButton className="mover" onClick={() =>{routerNavigator('/addproveedores')}}>
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
            <button className="btneliminar" onClick={() =>{Delete(proveedor._id)}} >
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

const Delete = async (id)=> {
  try{
  
    window.alert("Proveedor Eliminado");
    const data = await privateAxios.delete(
      `/api/v1/proveedores/delete/${id}`,
    );
    console.log('Signin Request: ', data)
  } catch(ex) {
    console.log('Error on Sigin submit', ex);
  }


}

export default Proveedores;