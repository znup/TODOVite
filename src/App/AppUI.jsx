import CreateTodoButton from '../Components/CreateTodoButton';
import TodoCounter from '../Components/TodoCounter';
import TodoItem from '../Components/TodoItem';
import TodoList from '../Components/TodoList';
import TodoSearch from '../Components/TodoSearch';

const AppUI = (props) => {
  const {
    completeTodo,
    completedTodos,
    deleteTodo,
    search,
    searchedTodos,
    setSearch,
    totalTodos,
  } = props;

  return (
    <>
      <TodoCounter total={totalTodos} isCompleted={completedTodos} />

      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            isCompleted={todo.isCompleted}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};

export default AppUI;
