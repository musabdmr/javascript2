import React from 'react';
import './Character.css';

function Character({ name, health, isAttacking, isDefending }) {
  return (
    <div className={`character ${isAttacking ? 'attacking' : ''} ${isDefending ? 'defending' : ''}`}>
      <h2>{name}</h2>
      <div className="health-bar">
        <div className="health-bar-inner" style={{ width: `${health}%` }}></div>
      </div>
    </div>
  );
}

export default Character;
