import withClickHandle from "../hocs/withClickHandler";
import withExtraInfo from "../hocs/withExtraInfo";
import BaseComponent from "./BaseComponent";

const ClickableComponent = withClickHandle(BaseComponent);
const EnhancedComponent = withExtraInfo(ClickableComponent);

export default function HOCExample() {
  return (
    <div>
      <h2>Ejemplo de componente de orden superior</h2>
      <EnhancedComponent name="Extendido" />  
    </div>
  ) 
}