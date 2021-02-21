import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import TodoList from './TodoList';

export default {
  title: 'Organisms/TodoList',
  component: TodoList
} as Meta;

export const TodoListComponent: React.VFC<{}> = () => <TodoList/>

