import React, { useState } from 'react';
import styles from './LogIn.module.css'
import Player from './Player.jsx';

const LogIn = () => {

  const [players, setPlayers] = useState([]);
  // State to store the current input values
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  // Function to handle adding a player
  const handleAddPlayer = () => {
    const playerName = inputName;
    const playerPassword = inputPassword;
    const playerKey = `${playerName}_${playerPassword}`;

    let playerAdded;
    // Check if player already exists in local storage
    const existingPlayer = localStorage.getItem(playerKey);
    if (existingPlayer) {
      // Parse the existing player data
      const playerData = JSON.parse(existingPlayer);

      // Update the player data
      playerData.playing = true;
      playerData.steps = 0;

      // Save the updated player data back to local storage
      localStorage.setItem(playerKey, JSON.stringify(playerData));

      alert('Player already exists! Updated playing status and steps.');
      playerAdded = playerData;
    } else {
      // Create a new player object
      const newPlayer = {
        name: playerName,
        password: playerPassword,
        scores: [],
        playing: true,
        steps: 0
      };

      // Save the new player to local storage
      localStorage.setItem(playerKey, JSON.stringify(newPlayer));
      localStorage.setItem('currentUser', playerKey);
      playerAdded = newPlayer;
    }

    
    setPlayers([...players, playerAdded]);
    // Clear the input fields
    setInputName('');
    setInputPassword('');
  };

  // Functions to handle input changes
  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  const handleStart = () => {
    document.getElementById('modal').style.display = 'none';
  }

  return (
    <>
      <div id='modal' className={styles.modal}>
        <div className={styles.modalContent}>


          <div className={styles.container}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className={styles.input}
                value={inputName}
                onChange={handleNameChange}
              />
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                value={inputPassword}
                onChange={handlePasswordChange}
              />
              <div className={styles.buttonContainer}>
                <button
                  type="button"
                  className={`${styles.button} ${styles.addButton}`}
                  onClick={handleAddPlayer}
                >
                  Add
                </button>
                <button
                  type="button"
                  className={`${styles.button} ${styles.startButton}`}
                  onClick={handleStart}
                >
                  Start
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.playersList}>
        {players.map((player, index) => (
          <Player key={index} objectPlayer={player} />
        ))}
      </div>
    </>
  );
};

export default LogIn;
