
import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";
import { PrimaryButton } from "../../UX/Forms/Button";
import { useNavigate, useParams } from "react-router-dom";

import "./Clientes.css";
import { useState } from "react";
import { privateAxios } from "../../../Lib/apiClient";

const Clientes = ({clientes})=>{
  const routerNavigator = useNavigate();
  const [posts, setPosts] = useState([])
    
  return (
    <Page header={<h2>Clientes</h2>} footer={<Nav/>}>
      <PrimaryButton className="mover" onClick={() =>{routerNavigator('/addcliente')}}>
       Agregar
       <img className="btnAgregar" src="https://i.ibb.co/0skfdFF/plus.png" alt="" />
      </PrimaryButton>
     <table className="table-1"> 
     <thead>
       <tr>
      <th>IDENTIDAD</th>
      <th> NOMBRE </th>
      <th>APELLIDO</th>
      <th>TELEFONO</th>
      <th>ELIMINAR</th>
      <th>EDITAR</th>
      </tr>
    </thead>
     </table>

      {     
      clientes?.map((o)=>{
          return <ClienteItem key={o._id} cliente={o} />
        })
      }
    </Page>
  );
}

const ClienteItem = ({cliente})=>{
  
  const {params} = useParams();
 
  return (  
    <section>
      <table>
        <tbody>
          <tr>
           <td> {cliente.identidad} </td>
            <td> {cliente.nombre} </td>
            <td> {cliente.apellido} </td>
            <td> {cliente.telefono}  </td>
            <td>
              <button className="btneliminar" onClick={() =>{Delete(cliente._id)}} >
              <img src="https://i.ibb.co/JdmBTkt/delete.png" alt="" />
              </button>
             </td>
             <td>
              <button className="btneditar" >
              <img src="https://i.ibb.co/vxBgLdF/lapiz-1.png" alt="" />
              </button>
             </td>
          </tr>
        </tbody>
      </table>
    </section>
  );

  
}

const Delete = async (id)=> {
    try{
    
      window.alert("Cliente Eliminado");
      const data = await privateAxios.delete(
        `/api/v1/clientes/delete/${id}`,
      );
      console.log('Signin Request: ', data)
    } catch(ex) {
      console.log('Error on Sigin submit', ex);
    }
  
  
}

export default Clientes;