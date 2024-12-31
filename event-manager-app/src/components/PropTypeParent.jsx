import PropTypeExample from "./PropTypeExample";

export default function PropTypeParent() {
  return (
    <div>
      <h2>Ejemplo de PropTypes</h2>
      <PropTypeExample title="Titulo válido" count={10} />
      <PropTypeExample title="Solo título" />
      <PropTypeExample count={20} />
    </div>
  )
}