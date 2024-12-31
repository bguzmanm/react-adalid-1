import { useRef } from "react";

export default function UncontrolledForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Acceder directamente a los valores del DOM
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;

    console.log("nombre: ", name);
    console.log("email: ", email);

    //limpiar los campos del formulario
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulario No Controlado</h3>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailInputRef} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
