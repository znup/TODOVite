const TodoSearch = () => {
  const todoSearch = {
    height: '64px',
    width: 'calc(100% - 62px)',
    margin: '0 24px',
    background: '#F9FBFC',
    borderRdius: '2px',
    border: '2px solid #202329',
    color: '#1E1E1F',
    fontSize: '24px',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    boxShadow: ' 0px 5px 50px rgba(32, 35, 41, 0.25)',
    '::placeholder': {
      color: '#A5A5A5',
      fontSize: '10px!important',
      fontWeight: 900,
    },
    '::before': {
      content: "'Escribe algo'",
    },
    ':focus': {
      outlineColor: '#61DAFA',
    },
  };

  return <input style={todoSearch} placeholder="Agrega un TODO" />;
};

export default TodoSearch;
