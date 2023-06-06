import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addpost, deletepost } from './store/todoReducer';

function App() {

  const dispatch = useDispatch()

  const todos = useSelector(state => state.todos.todos)

  return (
    <div className="App">
      <button className="add-button" onClick={() => dispatch(addpost(prompt('введите ТУДУШКУ')))}>добавить ТУДУШКУ</button>
      <div className='todos'> 
      <p className='title'>СПИСОК ТУДУШЕК</p>
      {todos.map(
        todo => (
          <div key={todo.id} className="todo-item">
          <h2>{todo.body}</h2>
          <button className="delete-button"  onClick={() => dispatch(deletepost(todo.id))}>delete</button>
          </div>
        )
      )}
      </div>
    </div>
  );
}

export default App;
