function withClickHandle(WrappedComponent) {
  return function ClickHandlerComponent(props) {
    const handleClick = () => {
      console.log(`Componente clikeado: ${props.name}`);
    };

    return (
      <div onClick={handleClick}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withClickHandle;