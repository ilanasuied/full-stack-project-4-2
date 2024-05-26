import React, { useState } from 'react';
import styles from './TopPlayers.module.css';

const TopPlayers = () => {
  const [topPlayers, setTopPlayers] = useState([]);

  const getPlayersDate = () => {
    const players = [];
    // Iterate over all keys in local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const playerData = JSON.parse(localStorage.getItem(key));

      // Check if playerData has scores
      if (playerData && playerData.scores.length > 0) {
        // Get the minimum score for this player
        const minScore = Math.min(...playerData.scores);
        players.push({ name: playerData.name, minScore }); 
      }
    }

    // Sort players by their minimum score in descending order and take the top 3
    players.sort((a, b) => a.minScore - b.minScore);
    setTopPlayers(players.slice(0, 3));
  }

  const handleClose = () => {
    getPlayersDate();
    const winnersBox = document.getElementById('winnersBox');
    const toggleButton = document.getElementById('toggleButton');
    winnersBox.classList.toggle('closed');
    if (winnersBox.classList.contains('closed')) {
      winnersBox.style.display = 'block';
      toggleButton.innerHTML = '&#10006;';
    } else {
      winnersBox.style.display = 'none';
      toggleButton.innerHTML = '&#x1F6C8;';
    }
  }

  return (
    <div>
      <button id='toggleButton' onClick={handleClose} className={styles.closeButton}>&#x1F6C8;</button>
      <div id='winnersBox' className={styles.topPlayersContainer}>
        <h2>Top Players</h2>
        <ul>
          {topPlayers.map((player, index) => (
            <li key={index}>
              {player.name} score:{player.minScore}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopPlayers;
