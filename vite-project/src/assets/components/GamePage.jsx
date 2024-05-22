import { useState } from 'react'
import styles from './GamePage.module.css'
import Player from './Player.jsx'

function GamePage() {

    return (
        <>
            <div className={styles.bodyGamePage}>
                <h1 className={styles.title}>GET TO 100</h1>
            </div>
        </>
    );
}

export default GamePage;