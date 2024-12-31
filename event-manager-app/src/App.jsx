import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import SocketIOView from "./views/SocketIOView";
import Home from "./components/Home";
import LazyLoadingView from "./views/LazyLoadingView";
import TransformableEventView from "./views/TransformableEventView";
import CategoryView from "./views/CategoryView";
import FragmentView from "./views/FragmentView";
import TransitionView from "./views/TransitionView";
import HOCView from "./views/HOCView";
import OptimizedView from "./views/OptimizedView";
import PortalView from "./views/PortalView";
import ProfilerView from "./views/ProfilerView";
import ReconciliationView from "./views/ReconciliationView";
import StrictModeView from "./views/StrictModeView";
import PropTypeView from "./views/PropTypeView";
import UncontrolledView from "./views/UncontrolledView";
import WebComponentView from "./views/WebComponentView";

function App() {
  const [view, setView] = useState("home");

  return (
    <div className="App">
      <Header />
      <nav>
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("socketio")}>Socket.io</button>
        <button onClick={() => setView("lazy")}>División de Código</button>
        <button onClick={() => setView("transform")}>
          Transformar Elementos
        </button>
        <button onClick={() => setView("categories")}>Categorías</button>
        <button onClick={() => setView("fragment")}>Fragmentos</button>
        <button onClick={() => setView("transitions")}>Transiciones</button>
        <button onClick={() => setView("hocs")}>HOCs</button>
        <button onClick={() => setView("optimized")}>Optimización</button>
        <button onClick={() => setView("portals")}>Portales</button>
        <button onClick={() => setView("profiler")}>Profiler</button>
        <button onClick={() => setView("reconciliation")}>
          Reconciliación
        </button>
        <button onClick={() => setView("strictmode")}>Modo Estricto</button>
        <button onClick={() => setView("proptypes")}>PropTypes</button>
        <button onClick={() => setView("uncontrolled")}>No Controlados</button>
        <button onClick={() => setView("webcomponent")}>WebComponents</button>
      </nav>
      {view === "home" && <Home />}
      {view === "socketio" && <SocketIOView />}
      {view === "lazy" && <LazyLoadingView />}
      {view === "transform" && <TransformableEventView />}
      {view === "categories" && <CategoryView />}
      {view === "fragment" && <FragmentView />}
      {view === "transitions" && <TransitionView />}
      {view === "hocs" && <HOCView />}
      {view === "optimized" && <OptimizedView />}
      {view === "portals" && <PortalView />}
      {view === "profiler" && <ProfilerView />}
      {view === "reconciliation" && <ReconciliationView />}
      {view === "strictmode" && <StrictModeView />}
      {view === "proptypes" && <PropTypeView />}
      {view === "uncontrolled" && <UncontrolledView />}
      {view === "webcomponent" && <WebComponentView />}
    </div>
  );
}

export default App;
