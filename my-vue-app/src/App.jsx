import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() === '') return;
    setItems([...items, { name: inputValue, checked: false }]);
    setInputValue('');
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const toggleItem = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  const downloadAsJSON = () => {
    const data = JSON.stringify(items, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shopping-list.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="App">
      <h1>Alışveriş Listesi</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ürün ekle"
        />
        <button onClick={addItem}>Ekle</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: item.checked ? 'line-through' : 'none',
              }}
              onClick={() => toggleItem(index)}
            >
              {item.name}
            </span>
            <button onClick={() => removeItem(index)}>Çıkar</button>
          </li>
        ))}
      </ul>
      <button onClick={downloadAsJSON}>Listeyi İndir (JSON)</button>
    </div>
  );
}

export default App;

  



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={downloadAsJSON}> ileri </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
   
    </>
  )
}

export default App
