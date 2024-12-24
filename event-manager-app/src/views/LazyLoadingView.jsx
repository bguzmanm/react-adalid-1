import React, { Suspense, useState } from "react";

const LazyLoadedComponent = React.lazy(() =>
  import("../components/LazyLoadedComponent")
);

function LazyLoadingView() {
  const [loadComponent, setLoadComponent] = useState(false);

  return (
    <div>
      <h1>Vista de Carga Diferida por Click</h1>
      <button
        onClick={() => {
          setLoadComponent(true);
        }}
      >
        Cargar Componente
      </button>
      {loadComponent && (
        <Suspense fallback={<p>Cargando componente...</p>}>
          <LazyLoadedComponent />
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoadingView;
