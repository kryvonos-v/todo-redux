import { Component } from 'react';
import { connect } from 'react-redux';
import { TodoList } from '../../components/todo-list/todo-list';
import { withRouter } from '../../router/with-router';
import { toggleTodo, fetchTodos } from '../../store/modules/todos/todos';
import { getVisibleTodos } from '../../store/store';

class VisibleTodoListController extends Component {
  render() {
    const { toggleTodo, ...props } = this.props;

    return (
      <TodoList
        {...props}
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
      items: getVisibleTodos(state, filter),
      filter
    };
  },
  {
    toggleTodo,
    fetchTodos
  }
)(VisibleTodoListController));
