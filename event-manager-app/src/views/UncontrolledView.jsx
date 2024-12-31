import UncontrolledForm from "../components/UncontrolledForm";

export default function UncontrolledView() {
  return (
    <div>
      <h1>Componentes No Controlados</h1>
      <p>
        Este ejemplo muestra como manejar datos de formularios directamnete
        desde el DOM usando referencias (`ref`)
      </p>
      <UncontrolledForm />      
    </div>
  );
}
