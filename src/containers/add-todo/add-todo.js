import { connect } from 'react-redux';
import { TodoForm } from '../../components/todo-form/todo-form';
import { addTodo } from '../../store/modules/todos/todos.actions';

export const AddTodo = connect(
  null,
  dispatch => ({
    onTodoAdd(value) {
      dispatch(addTodo(value))
    }
  })
)(TodoForm);
