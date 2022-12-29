const TodoCounter = (props) => {
  const { total, isCompleted } = props;

  const todoCounter = {
    margin: 0,
    padding: '48px',
    fontSize: '24px',
    textSlign: 'center',
  };
  return (
    <div>
      <h3 style={todoCounter}>
        `Has completado {isCompleted} de {total} TO-Do's`
      </h3>
    </div>
  );
};

export default TodoCounter;
