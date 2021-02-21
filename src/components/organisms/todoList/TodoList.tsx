import React from 'react'
import Toolbar from '../../molecues/toolbar/Toolbar';
import List from '../list/List';

function TodoList() {
  const tasks = ["Task 1", "Task 2"]

  return (
    <div>
      <Toolbar />
      <div className="mt-20px">
        <List items={tasks}/>
      </div>
    </div>
  )
}

export default TodoList;
