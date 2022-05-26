import './App.css';
import { AddTodo } from './containers/add-todo/add-todo';
import { TodosFilter } from './containers/todos-filter/todos-filter';
import { VisibleTodoList } from './containers/visible-todo-list/visible-todo-list';

function App(props) {
  return (
    <div className="app container">
      <AddTodo />
      <TodosFilter />
      <VisibleTodoList />
    </div>
  );
}

export default App;
