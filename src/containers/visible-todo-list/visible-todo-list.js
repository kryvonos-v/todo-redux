import { Component } from 'react';
import { connect } from 'react-redux';
import { TodoList } from '../../components/todo-list/todo-list';
import { withRouter } from '../../router/with-router';
import { toggleTodo, fetchTodos } from '../../store/reducers/todos/todos';
import { getVisibleTodos, getIsFetching } from '../../store/reducers';

class VisibleTodoListController extends Component {
  render() {
    const { isFetching, todos, toggleTodo } = this.props;

    if (isFetching && !todos.length) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <TodoList
        items={todos}
        onTodoClick={item => toggleTodo(item.id)}
      />
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevState) {
    if (prevState.filter !== this.props.filter) {
      this.fetchData();
    }
  }
  
  fetchData() {
    const { filter, fetchTodos } = this.props;
    return fetchTodos(filter);
  }
}

export const VisibleTodoList = withRouter(connect(
  (state, { params }) => {
    const filter = params.filter || 'all';

    return {
      todos: getVisibleTodos(state, filter),
      isFetching: getIsFetching(state, filter),
      filter
    };
  },
  {
    toggleTodo,
    fetchTodos
  }
)(VisibleTodoListController));
