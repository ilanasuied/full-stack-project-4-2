import { useState } from 'react'
import styles from './GamePage.module.css'
import TopPlayers from './TopPlayers';

function GamePage() {

    return (
        <>
            <div className={styles.bodyGamePage}>
                <h1 className={styles.title}>GET TO 100</h1>
                <TopPlayers />
            </div>
        </>
    );
}

export default GamePage;