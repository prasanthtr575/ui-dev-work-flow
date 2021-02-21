import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import List from './List';

export default {
  title: 'Organisms/List',
  component: List
} as Meta;

const tasks = ["Task 1", "Task 2"]

export const ListWithItems: React.VFC<{}> = () => <List items={tasks}/>
export const ListWithoutItems: React.VFC<{}> = () => <List items={[]}/>

