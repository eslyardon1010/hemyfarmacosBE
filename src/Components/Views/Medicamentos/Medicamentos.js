import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";

const Medicamentos = ({medicamentos})=>{
  return (
    <Page header={<h2>Medicamentos</h2>} footer={<Nav/>}>
      {
      medicamentos.map((o)=>{
          return <MedicamentoItem key={o._id} medicamento={o} />
        })
      }
    </Page>
  );
}

const MedicamentoItem = ({medicamento})=>{
  return (
    <section>
      {medicamento.nombre} {medicamento.costo}
    </section>
  );
}

export default Medicamentos;