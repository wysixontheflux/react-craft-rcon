import React, { useState } from 'react';

function App() {
  const [list, setList] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/list');
      const data = await response.text();
      setList(data);
    } catch (err) {
      console.error(err);
      setList('Erreur lors de l\'exécution de la commande');
    }
  }

  const handleClickGIve = async () => {
    try {
      const response = await fetch('http://localhost:3001/give');
      const data = await response.text();
      setList(data);
    } catch (err) {
      console.error(err);
      setList('Erreur lors de l\'exécution de la commande');
    }
  }

  const handleClickGIveGold = async () => {
    try {
      const response = await fetch('http://localhost:3001/givegold');
      const data = await response.text();
      setList(data);
    } catch (err) {
      console.error(err);
      setList('Erreur lors de l\'exécution de la commande');
    }
  }

  return (
      <div>
        <button onClick={handleClick}>Liste des joueurs</button>
        <p>{list}</p>
        <button onClick={handleClickGIve}>give 64 diamonds</button>
        <button onClick={handleClickGIveGold}>give 64 gold</button>
      </div>
  );
}

export default App;
