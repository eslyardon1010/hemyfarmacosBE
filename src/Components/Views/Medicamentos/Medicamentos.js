
import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";
import "./Medicamentos.css";

import { useNavigate } from "react-router-dom"; 
import { View } from "react-native-web";
const Medicamentos = ({medicamentos})=>{
  return (
    <Page header={<h2>Medicamentos</h2>} footer={<Nav/>}>
      {
      medicamentos?.map((o)=>{
          return <MedicamentoItem key={o._id} medicamento={o} />
        })
      }
    </Page>
  );
}

const MedicamentoItem = ({medicamento})=>{
  let navigate = useNavigate();
  return (
    <section className="body">
    <View>
  <table className="rwd-table">
  <tr>
    <th>Codigo</th>
    <th>Nombre</th>
    <th>Costo</th>
    <th>Cantidad</th>
    <th>Vencimiento</th>
  </tr>
  <tr>
    <td>{medicamento.codigo}</td>
    <td>{medicamento.nombre}</td>
    <td>{medicamento.costo}</td>
    <td>{medicamento.cantidad}</td>
    <td>{medicamento.fechaVencimiento}</td>
  </tr>
  
</table>

  
    </View>
    </section>
  );
}

export default Medicamentos;