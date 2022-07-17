import logo from './logo.svg';
import './App.css';
import TodoForm from './context/TodoForm';
import TodoList from './context/TodoList';
import {useState} from 'react';

function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: 'tetser',
      isCompleted: false

    },
    {
      id: 2,
      title: 'asd',
      isCompleted: false

    },
    {
      id: 3,
      title: 'ss',
      isCompleted: false

    },
    {
      id: 4,
      title: 'ff',
      isCompleted: false

    },
    {
      id: 5,
      title: 'bb',
      isCompleted: false
    }
  ])
  return (
    <div className='App'>
    <TodoForm addItem={(text) => {
      setTodo([
        ...todos,
        {
          id: todos.length + 1,
          title: text,
          isCompleted: false
        }
      ]);
    }} />
    <div className="main">
      <section className="todos">
        <TodoList 
          todos={todos}
          Complete={(todo) => {
            setTodo(todos.filter((t) => todo.id !== t.id));
          }}
        />
      </section>
    </div></div>
  );
}

export default App;

