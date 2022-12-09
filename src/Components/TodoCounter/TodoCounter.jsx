const TodoCounter = () => {
  const todoCounter = {
    margin: 0,
    padding: '48px',
    fontSize: '24px',
    textSlign: 'center',
  };
  return (
    <div>
      <h3 style={todoCounter}>Has completado 1 de 4 TO-Do's</h3>
    </div>
  );
};

export default TodoCounter;
