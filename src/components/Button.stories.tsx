import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import Button from './Button';

export default {
  title: 'Demo/Button',
  component: Button
} as Meta;

// const Template: Story = _ => <Button cls="">Test</Button>;

// export const TestButton = <Button cls="bg-test-bg-color text-white">Test</Button>
export const TestButton: React.VFC<{}> = () => <Button cls="bg-test-bg-color text-white">Test Button</Button>;

