import { useState } from 'react'
import styles from './GamePage.module.css'
import Player from './Player.jsx'

function GamePage(){

    return (
        <>
            <h1 className={styles.title}>GET TO 100</h1>
            <div className={styles.bodyGamePage}>
                <Player />
                <Player />
                <Player />

            </div>
        </>
    );
}

export default GamePage;