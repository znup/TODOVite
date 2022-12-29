import { useState } from 'react';

import AppUI from './AppUI';
import './App.css';

// const defaultTodos = [
//   { text: 'Realizar el curso de React', isCompleted: true },
//   { text: 'Realizar el curso de JS para dummys', isCompleted: false },
//   { text: 'Realizar el curso de JS para dummys 2', isCompleted: !false },
// ];

const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  return [item, saveItem];
};

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [search, setSearch] = useState('');

  const completedTodos = todos.filter((todo) => !!todo.isCompleted).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!search.length > 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoTxt = todo.text.toLowerCase();
      const searchTxt = search.toLowerCase();

      return todoTxt.includes(searchTxt);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].isCompleted = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
