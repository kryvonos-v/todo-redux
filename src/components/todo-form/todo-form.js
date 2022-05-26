import { func } from 'prop-types';
import './todo-form.css';

export function TodoForm({ onTodoAdd }) {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { todo } = form.elements;

    if (todo.value) {
      onTodoAdd(todo.value);
      form.reset();
    }
  }

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input type="text" name="todo" autoComplete="off" />
      <button type="submit" className="btn">Add</button>
    </form>
  );
}

TodoForm.propTypes = {
  onTodoAdd: func.isRequired
};
