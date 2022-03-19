import './App.scss';
import TodoForm from './components/todoForm/TodoForm';
import TodoList from './components/todoLIst/TodoList';
import { Routes, Route } from 'react-router-dom';
import TodoData from './components/todoData/TodoData';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <Routes>
        <Route path='/' element={<TodoData />} />
        <Route path='data/lists' element={<TodoList />}/>
      </Routes>
    </div>
  );
}

export default App;
