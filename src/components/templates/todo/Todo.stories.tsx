import { Meta } from '@storybook/react/types-6-0';
import Todo from "./Todo";

export default {
  title: 'Templates/Todo',
  component: Todo,
} as Meta;

export const TodoTest: React.VFC<{}> = () => <Todo/>