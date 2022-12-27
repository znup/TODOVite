const CreateTodoButton = (props) => {
  const handleTodoBtn = (msg) => {
    alert(msg);
  };

  return (
    <>
      <button
        className="CreateTodoButton"
        onClick={() => handleTodoBtn('clic  donde deberia ir un Modal')}
      >
        +
      </button>
    </>
  );
};

export default CreateTodoButton;
