
import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";


import "./Clientes.css";
const Clientes = ({clientes})=>{
  return (
    <Page header={<h2>Clientes</h2>} footer={<Nav/>}>
     <table className="table-1"> 
     <thead>
      <th>IDENTIDAD</th>
      <th> NOMBRE </th>
      <th>APELLIDO</th>
      <th>TELEFONO</th>
    
    </thead>
     </table>
     <a href="#" class="btn-agregar">AGREGAR</a>
     <a href="#" class="btn-editar">EDITAR</a>
     <a href="#" class="btn-eliminar">ELIMINAR</a>
      {     
      clientes?.map((o)=>{
          return <ClienteItem key={o._id} cliente={o} />
        })
      }
    </Page>
  );
}

const ClienteItem = ({cliente})=>{
  return (
    <section>
      <table>
        <tbody>
          <tr>
           <td> {cliente.identidad} </td>
            <td> {cliente.nombre} </td>
            <td> {cliente.apellido} </td>
            <td> {cliente.telefono}  </td>
          </tr>
        </tbody>
      </table>
    </section>
   
     
  );
  
}

export default Clientes;