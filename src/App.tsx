import React, { useState } from 'react';
import Todo from './components/Todo';
import './CSS/App.css';
import './CSS/List.css'


const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <main className='container'>
        <h1>Entered tasks {count}</h1>
        <Todo setCount={setCount}/>
      </main>
    </div>
  );
}

export default App;