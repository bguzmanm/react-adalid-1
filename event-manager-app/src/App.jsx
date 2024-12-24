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
    </div>
  );
}

export default App;
