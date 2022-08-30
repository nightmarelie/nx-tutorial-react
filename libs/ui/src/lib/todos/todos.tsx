import './todos.module.css';
import { Todo } from '@nx-tutorial-react/data';

export interface TodosProps {
  todos: Todo[];
}

export function Todos(props: TodosProps) {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={'todo'}>{t.title}</li>
      ))}
    </ul>
  );
}

export default Todos;
