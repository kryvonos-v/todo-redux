import { func } from 'prop-types';
import { models } from '../../models/models';
import './todo-list.css';

// QUESTION: How did Dan name todo list?
export function TodoList({ items, onTodoClick }) {
  return (
    <ul className="todo-list">
      {items.map(item => (
        <li
          key={item.id}
          className="todo-item"
          style={{
            textDecoration: item.completed ? 'line-through' : 'none'
          }}
          onClick={() => onTodoClick(item)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  items: models.TodoList.isRequired,
  onTodoClick: func.isRequired
};
