import { useState } from "react";
import Modal from "./Modal";

export default function PortalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <h2>Ejemplo de Portal</h2>
      <button onClick={openModal}>Abrir Modal</button>
      {isOpen && (
        <Modal onClose={closeModal}>
          <h3>Detalles del Evento</h3>
          <p>Aqui puedes añadir información adicional sobre el evento.</p>
        </Modal>
      )}
    </div>
  );
}
