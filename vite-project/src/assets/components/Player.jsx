import { useState } from 'react'
import styles from './Player.module.css'
import Options from './Options.jsx'
function Player(props) {

    const [counter, setCounter] = useState(Math.floor(Math.random() * 100)); //state forthe counter
    const [stepsSum, setStepsSum] = useState(0); //state for the step counter
    const [showModal, setShowModal] = useState(false); //state for modal visibility
    const [score, setScore] = useState(props.objectPlayer.scores); //state for the scores array


    const addOne = () => {
        setCounter(prevCount => prevCount + 1)
        setStepsSum(prevstepsSum => prevstepsSum + 1)
        if (counter === 99) {
            gotTo100();
        }

        //goto the function that is in the gamePage file
        props.onActionComplete();
    };

    const minusOne = () => {
        setCounter(prevCount => prevCount - 1)
        setStepsSum(prevstepsSum => prevstepsSum + 1)
        if (counter === 101) {
            gotTo100();
        }
        props.onActionComplete();
    };

    const multByTwo = () => {
        setCounter(prevCount => prevCount * 2)
        setStepsSum(prevstepsSum => prevstepsSum + 1)
        if (counter === 50) {
            gotTo100();
        }
        props.onActionComplete();
    };

    const divideByTwo = () => {
        setCounter(prevCount => Math.floor(prevCount / 2))
        setStepsSum(prevstepsSum => prevstepsSum + 1)
        if (counter === 200) {
            gotTo100();
        }
        props.onActionComplete();
    };

    const gotTo100 = () => {
        setShowModal(prevShowModal => true); // Show the modal
    }

    const LeaveTheGame = (objPlayer, playAgainCalledMe = false) => {
        //update the score's array
        objPlayer.scores.push(stepsSum);
        // Save the updated player data back to local storage
        const playerKey = `${objPlayer.name}_${objPlayer.password}`;
        localStorage.setItem(playerKey, JSON.stringify(objPlayer));

        setShowModal(prevShowModal => false); // Close the modal
        props.onLeave(objPlayer, playAgainCalledMe);

    };

    const playAgain = (objPlayer) => {
        LeaveTheGame(objPlayer, true);
        setStepsSum(prevstepsSum => 0);
        setCounter(prevCount => Math.floor(Math.random() * 100));
        //called the function in GamePage
        props.onPlayAgain(objPlayer);
    }

    return (

        <div className={props.isCurrentPlayer ? styles.playerCart : styles.playerCartDisable}>
            <h2>Gamer: {props.objectPlayer.name}</h2>
            <h1>{counter}</h1>
            <h4>steps: {stepsSum}</h4>
            <Options onPlusOne={addOne}
                onMinusOne={minusOne}
                onMult={multByTwo}
                onDivide={divideByTwo}
                disabled={!props.isCurrentPlayer}
            />
            <h4>scores: {score.join(', ')}</h4>
            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2 className={styles.modalContent}>WINNER <br />🎉🎉🎉</h2>
                        <button onClick={() => LeaveTheGame(props.objectPlayer)} className={styles.modalButtonLeave}>Leave</button>
                        <button onClick={() => playAgain(props.objectPlayer)} className={styles.modalButtonAgain}>Play Again</button>
                    </div>
                </div>
            )}
        </div>

    );
}

export default Player;