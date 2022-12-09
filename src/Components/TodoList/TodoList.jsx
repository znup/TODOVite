const TodoList = (props) => {
  const ulTL = {
    margin: 0,
    padding: '0 0 56px 0',
    listStyle: 'none',
  };

  return (
    <div>
      <ul style={ulTL}>{props.children}</ul>
    </div>
  );
};

export default TodoList;
