import CreateTodoButton from './Components/CreateTodoButton';
import TodoCounter from './Components/TodoCounter';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';
import TodoSearch from './Components/TodoSearch';

import './App.css';

const todos = [
  { text: 'Realizar el curso de React', isCompleted: true },
  { text: 'Realizar el curso de JS para dummys', isCompleted: false },
  { text: 'Realizar el curso de JS para dummys 2', isCompleted: false },
];

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            isCompleted={todo.isCompleted}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
