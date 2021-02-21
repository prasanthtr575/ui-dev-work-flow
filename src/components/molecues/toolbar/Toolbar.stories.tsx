import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Toolbar from './Toolbar';

export default {
  title: 'Molecules/Toolbar',
  component: Toolbar
} as Meta;

export const TodoInputBox: React.VFC<{}> = () => <Toolbar/>

