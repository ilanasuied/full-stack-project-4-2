import { useState } from 'react'
import styles from './Player.module.css'
import Options from './Options.jsx'
function Player(){

    const [counter, setCounter] = useState(0);
    const [stepsSum, setStepsSum] = useState(0);

    const addOne = () =>{
        setCounter(prevCount => prevCount + 1)
        setStepsSum(prevstepsSum => prevstepsSum + 1)
    };

    const minusOne = () =>{
        setCounter(prevCount => prevCount - 1)
        setStepsSum(prevstepsSum => prevstepsSum + 1)
    };

    const multByTwo = () =>{
        setCounter(prevCount => prevCount * 2)
        setStepsSum(prevstepsSum => prevstepsSum + 1)
    };

    const divideByTwo = () =>{
        setCounter(prevCount => prevCount / 2)
        setStepsSum(prevstepsSum => prevstepsSum + 1)
    };

    return (
        <div className={styles.playerCart}>
            <h2>Gamer:</h2>
            <h3>counter: {counter}</h3>
            <h4>steps: {stepsSum}</h4>
            <Options    onPlusOne={addOne}
                        onMinusOne={minusOne}
                        onMult={multByTwo}
                        onDivide={divideByTwo}
            />
            <h4>scores:</h4>
        </div>
    );
}

export default Player;