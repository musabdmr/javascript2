// src/components/Game.js
import React, { useState, useEffect } from 'react';
import Character from './App';
import './App.css';

const Game = () => {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [message, setMessage] = useState('');
  const [playerHealCount, setPlayerHealCount] = useState(2);

  const handleAttack = () => {
    const damage = Math.floor(Math.random() * 10) + 1;
    setEnemyHealth(enemyHealth - damage);
  };

  const handleDefense = () => {
    // Savunma animasyonunu burada ekleyebilirsiniz.
  };

  const handleHeal = () => {
    if (playerHealCount > 0) {
      const healAmount = Math.floor(Math.random() * 10) + 1;
      setPlayerHealth(playerHealth + healAmount);
      setPlayerHealCount(playerHealCount - 1);
    }
  };

  const handleSwordSwing = () => {
    // Kılıç sallama animasyonunu burada ekleyebilirsiniz.
  };

  useEffect(() => {
    if (playerHealth <= 0) {
      setMessage('Düşman kazandı!');
    } else if (enemyHealth <= 0) {
      setMessage('Oyuncu kazandı!');
    }
  }, [playerHealth, enemyHealth]);

  return (
    <div className="game">
      <Character
        name="Oyuncu"
        health={playerHealth}
        onAttack={handleAttack}
        onDefense={handleDefense}
        onHeal={handleHeal}
        swordSwing={handleSwordSwing}
      />
      <Character
        name="Düşman"
        health={enemyHealth}
        onAttack={handleAttack}
        onDefense={handleDefense}
        onHeal={handleHeal}
        swordSwing={handleSwordSwing}
      />
      <div className="message">{message}</div>
    </div>
  );
};

export default Game;
