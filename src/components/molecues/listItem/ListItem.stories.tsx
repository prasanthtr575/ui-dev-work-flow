import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ListItem from './ListItem';

export default {
  title: 'Molecules/ListItem',
  component: ListItem
} as Meta;

export const ListItemWithBottomBorder: React.VFC<{}> = () => <ListItem value="Task 3"/>
export const ListItemWithoutBottomBorder: React.VFC<{}> = () => <ListItem value="Task 3" noBorder/>

