import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

function SocketForm() {
  const [title, setTitle] = useState("");
  const { addEvent } = useContext(SocketContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      date: new Date().toLocaleDateString(),
      status: "Pendiente",
    };
    addEvent(newEvent);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nuevo Evento"
      />
      <button type="submit">Añadir Evento</button>
    </form>
  );
}

export default SocketForm