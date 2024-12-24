import { Profiler } from "react";
import OptimizedEventList from "../components/OptimizedEventList";

export default function OptimizedView() {
  const onRenderCallback = (id, phase, actualDuration) => {
    console.log(`${id} (${phase} tomó ${actualDuration} ms para rendizar.`);
  };
  return (
    <div>
      <h1>Optimización del rendimiento</h1>
      <Profiler id="OptimizedEventList" onRender={onRenderCallback}>
        <OptimizedEventList />
      </Profiler>
    </div>
  );
}
