import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import TextField from './TextField';

export default {
  title: 'Atoms/TextField',
  component: TextField
} as Meta;

export const TextFieldEnabled: React.VFC<{}> = () => <TextField cls="bg-white text-black border border-tertiary p-20px" placeholder="Add Todo"/>
export const TextFieldDisabled: React.VFC<{}> = () => <TextField cls="bg-white text-tertiary border border-tertiary p-20px cursor-not-allowed" placeholder="" disabled value="Task 1" onChange={ ()=>true}/>

