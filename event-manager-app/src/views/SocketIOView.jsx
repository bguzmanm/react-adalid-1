import SocketEventList from "../components/SocketEventList";
import SocketForm from "../components/SocketForm";
import SocketProvider from "../context/SocketContext";

function SocketIOView() {
  return (
    <SocketProvider>
      <div>
        <h1>Gestión de Eventos en Tiempo Real</h1>
        <SocketForm />
        <SocketEventList />
      </div>
    </SocketProvider>
  );
}

export default SocketIOView;