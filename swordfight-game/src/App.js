import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './Character';

function App() {
  const [samurayHealth, setSamurayHealth] = useState(100);
  const [ninjaHealth, setNinjaHealth] = useState(100);
  const [samurayAttack, setSamurayAttack] = useState(false);
  const [samurayDefense, setSamurayDefense] = useState(false);
  const [samurayHealCount, setSamurayHealCount] = useState(2);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (samurayHealth <= 0) setWinner('Ninja')
    if (ninjaHealth <= 0) setWinner('Samuray')
  }, [samurayHealth, ninjaHealth]);

  // TODO: Burası değişecek. 
  useEffect(() => {
    const samurayHealthInterval = setInterval(() => {
      if (!samurayDefense) {
        const damage = Math.floor(Math.random() * 5) + 1;
        setSamurayHealth((ilkCan) => Math.max(ilkCan - damage, 0));
      }
    }, 1000);

    return () => {
      clearInterval(samurayHealthInterval);
    };
  }, [samurayDefense]);

  const handleAttack = () => {
    if (!samurayDefense) {
      setNinjaHealth(ninjaHealth - 10);
    }
    setSamurayAttack(true);
    setTimeout(() => setSamurayAttack(false), 500);
  };

  const handleDefense = () => {
    setSamurayDefense(true);
    setTimeout(() => setSamurayDefense(false), 1000);
  };

  const handleHeal = () => {
    if (samurayHealCount > 0) {
      setSamurayHealth(Math.min(samurayHealth + 20, 100));
      setSamurayHealCount(samurayHealCount - 1);
    }
  };

  return (
    <div className="App">
      {winner ? (
        <h2 id='kazanan'>{winner} Kazandı!</h2>
      ) : (
        <>
          <Character
            name="Samuray"
            health={samurayHealth}
            isAttacking={samurayAttack}
            isDefending={samurayDefense}
          />
          <Character name="Ninja" health={ninjaHealth} />

          <button onClick={handleAttack} id='saldırı'>Saldır</button>
          <button onClick={handleDefense} id='savunma'>Savun</button>
          <button onClick={handleHeal} id='can'>Can</button>
          <button id='clay'>TEST</button>
        </>
      )}
    </div>
  );
}

export default App;