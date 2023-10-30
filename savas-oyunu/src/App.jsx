// src/components/Character.js
import React from 'react';

const Character = ({ name, health, onAttack, onDefense, onHeal, swordSwing }) => {
  return (
    <div className="character">
      <h2>{name}</h2>
      <div>Can: {health}</div>
      <div className="sword" onClick={onAttack}>
        Kılıç Salla
      </div>
      <button onClick={onDefense}>Defans</button>
      <button onClick={onHeal}>Can Arttır</button>
    </div>
  );
};

export default Character;
