import { useState } from "react";

export default function BadReconciliationList() {
  const [items, setItems] = useState([
    "Elemento A",
    "Elemento B",
    "Elemento C",
  ]);
  const addItem = () => {
    const newItem = `Elemento ${String.fromCharCode(65 + items.length)}`;
    setItems([...items, newItem]);
  };
  const shuffleItems = () => {
    setItems((prevItems) => [...prevItems].sort(() => Math.random() - 0.5));
  };

  return (
    <div>
      <h3>Lista sin claves Únicas</h3>
      <button onClick={addItem}>Añadir Elemento</button>
      <button onClick={shuffleItems}>Mezclar Elementos</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // mal uso del índice como clave
        ))}
      </ul>
    </div>
  );
}
