import React, { useContext } from 'react';
import Toolbar from '../../molecues/toolbar/Toolbar';
import List from '../list/List';
import { TodosContext } from '../../templates/todo/Todo';

function TodoList() {
  const { tasks, updateTodos, deleteTodo } = useContext(TodosContext);
  const addTask = (task: string) => updateTodos && updateTodos(task);
  const deleteTask = (index: number) => deleteTodo && deleteTodo(index);

  return (
    <div>
      <Toolbar addTask={addTask} />
      <div className="mt-20px">
        <List items={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default TodoList;
