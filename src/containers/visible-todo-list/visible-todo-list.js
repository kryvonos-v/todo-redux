import { Component } from 'react';
import { connect } from 'react-redux';
import { TodoList } from '../../components/todo-list/todo-list';
import { withRouter } from '../../router/with-router';
import { toggleTodo, fetchTodos } from '../../store/reducers/todos/todos.actions';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../../store/reducers';
import { FetchError } from '../../components/fetch-error/fetch-error';

class VisibleTodoListController extends Component {
  render() {
    const { isFetching, errorMessage, todos, toggleTodo } = this.props;

    if (isFetching && !todos.length) {
      return (
        <p>Loading...</p>
      );
    } else if (errorMessage) {
      return (
        <FetchError
          message={errorMessage}
          retry={() => this.fetchData()}
        />
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
      errorMessage: getErrorMessage(state, filter),
      isFetching: getIsFetching(state, filter),
      filter
    };
  },
  {
    toggleTodo,
    fetchTodos
  }
)(VisibleTodoListController));
