import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Footer from './Footer';

export default {
  title: 'Atoms/Footer',
  component: Footer
} as Meta;

export const Bottombar: React.VFC<{}> = () => <Footer>Atomic Design Principle</Footer>
