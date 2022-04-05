
import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";
import "./Medicamentos.css";
import { PrimaryButton } from "../../UX/Forms/Button";

import { privateAxios } from "../../../Lib/apiClient";

const Medicamentos = ({medicamentos})=>{
  
  return (
    <Page header={<h2>Medicamentos</h2>} footer={<Nav/>}>
        <PrimaryButton className="mover" onClick={() =>console.warn("HOLA")}>
       Agregar
       <img className="btnAgregar" src="https://i.ibb.co/0skfdFF/plus.png" alt="" />
      </PrimaryButton>
       <table className="table-1"> 
     <thead>
<th>CODIGO</th>
<th>NOMBRE</th>
<th>COSTO</th>
<th>CANTIDAD</th>
<th>VENCIMIENTO</th>
<th>ELIMINAR</th>
<th>EDITAR</th>
    </thead>
     </table>
      {
      medicamentos?.map((o)=>{
          return <MedicamentoItem key={o._id} medicamento={o} />
        })
      }
    </Page>
  );
}
const MedicamentoItem = ({medicamento})=>{
  return (
    
    <section>
      <table>
        <tbody>
          <td>{medicamento.codigo}</td>
          <td>{medicamento.nombre}</td>
          <td>{medicamento.costo}</td>
          <td>{medicamento.cantidad}</td>
          <td>{medicamento.fechaVencimiento}</td>
            <td>
            <button className="btneliminar" onClick={() =>{Delete(medicamento._id)}} >
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
  
    window.alert("Medicamento Eliminado");
    const data = await privateAxios.delete(
      `/api/v1/medicamentos/delete/${id}`,
    );
    console.log('Signin Request: ', data)
  } catch(ex) {
    console.log('Error on Sigin submit', ex);
  }


}

export default Medicamentos;