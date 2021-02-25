import React, { useState } from 'react';
import Footer from '../../atoms/footer/Footer';
import Header from '../../atoms/header/Header';
import TodoList from '../../organisms/todoList/TodoList';

const defaultValue: string[] = ['Task 1'];

export const TodosContext = React.createContext({
  tasks: defaultValue,
  updateTodos: (tasks: any) => {},
  deleteTodo: (index: number) => {}
});

function Todo() {
  const [todos, setTodos] = useState(defaultValue);
  const updateTodos = (task: any) => {
    setTodos((prev) => [...prev, task]);
  };
  const deleteTodo = (index: number) => {
    setTodos((prev) => [...prev.filter((todo, i) => i !== index)]);
  };

  return (
    <TodosContext.Provider value={{ tasks: todos, updateTodos, deleteTodo }}>
      <div className="h-screen flex flex-col">
        <Header>Todo</Header>
        <div className="my-80px md:mx-120px lg:mx-500px sm:mx-20px flex-1">
          <TodoList />
        </div>
        <Footer className="mt-40px">Atomic Design Principle</Footer>
      </div>
    </TodosContext.Provider>
  );
}

export default Todo;
