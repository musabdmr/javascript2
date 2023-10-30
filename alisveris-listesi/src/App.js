import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialItems = [
    { name: 'Çay', checked: false },
    { name: 'Şeker', checked: false },
    { name: 'Un', checked: false },
    { name: 'Pirinç', checked: false },
    { name: 'Bulgur', checked: false },
    { name: 'Makarna', checked: false },
    { name: 'Salça', checked: false },
  ];

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('list')) || initialItems);
  const [newItem, setNewItem] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [sortedItems, setSortedItems] = useState([]);

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { name: newItem, checked: false }]);
      setNewItem('');
    }
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

  const toggleAll = () => {
    const newItems = items.map((item) => ({ ...item, checked: !selectAll }));
    setItems(newItems);
    setSelectAll(!selectAll);
  };

  const clearAll = () => {
    setItems([]);
  };

  useEffect(() => {
    const temp2 = items.sort((ilk, ikinci) => Number(ilk.checked) - Number(ikinci.checked));
    setSortedItems(temp2);
    localStorage.setItem('list', JSON.stringify(temp2));
  }, [items])



  return (
    <div className="App">
      <h1>Alışveriş Listesi</h1>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addItem();
            }
          }}
          placeholder="Ürün ekle"
        />
        <button onClick={addItem}>Ekle</button>
      </div>
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleItem(index)}
            />
            <span
              style={{
                textDecoration: item.checked ? 'line-through' : 'none',
              }}
            >
              {item.name}
            </span>
            <button onClick={() => removeItem(index)}>Çıkar</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={toggleAll}>Tümünü İşaretle</button>
        <button onClick={clearAll}>Tümünü Sil</button>
      </div>
    </div>
  );
}

export default App;