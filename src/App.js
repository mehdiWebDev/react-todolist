import './App.css';
import Header from './components/header/Header';
import TodoItem from './components/todo-item/TodoItem';
import Form from './components/form/Form';
import { ItemProvider } from './context/todolist-context';

function App() {
  return (
    <ItemProvider>
      <div className="App">
        <Header />
        <Form />
        <TodoItem />
      </div>
    </ItemProvider>
  );
}

export default App;
