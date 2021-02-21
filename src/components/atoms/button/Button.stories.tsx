import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button
} as Meta;

//Different states of the button
export const ButtonEnabled: React.VFC<{}> = () => <Button className="hover:bg-primary hover:text-light bg-light text-primary text-label font-bold border border-primary px-57px py-20px">Add</Button>;
export const ButtonDisabled: React.VFC<{}> = () => <Button className="bg-tertiary text-light text-label font-bold px-57px py-20px cursor-not-allowed" disabled>Add</Button>;
export const RoundButtonNormal: React.VFC<{}> = () => <Button className="hover:bg-secondary hover:text-light bg-light text-secondary text-label font-bold border border-secondary w-40px h-40px rounded-full">X</Button>;
export const RoundButtonDisabled: React.VFC<{}> = () => <Button className="bg-tertiary text-light text-label font-bold w-40px h-40px cursor-not-allowed rounded-full" disabled>X</Button>;



