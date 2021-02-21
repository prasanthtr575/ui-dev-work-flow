import React from 'react'
import Footer from '../../atoms/footer/Footer'
import Header from '../../atoms/header/Header';
import TodoList from '../../organisms/todoList/TodoList';

function Todo() {
  return (
    <div className="h-screen flex flex-col">
      <Header>Todo</Header>
      <div className="my-80px mx-500px flex-1">
        <TodoList/>
      </div>
      <Footer className="mt-40px">Atomic Design Principle</Footer>
    </div>
  )
}

export default Todo
