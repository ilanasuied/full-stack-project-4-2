import { useState } from 'react'
import styles from './Player.module.css'
import Options from './Options.jsx'
function Player(props){

    const [counter, setCounter] = useState(0);
    const [stepsSum, setStepsSum] = useState(0);


    const addOne = () =>{
        setCounter(prevCount => prevCount + 1)
        setStepsSum(prevstepsSum => prevstepsSum + 1)
        props.onActionComplete();
    };

    const minusOne = () =>{
        setCounter(prevCount => prevCount - 1)
        setStepsSum(prevstepsSum => prevstepsSum + 1)
        props.onActionComplete();
    };

    const multByTwo = () =>{
        setCounter(prevCount => prevCount * 2)
        setStepsSum(prevstepsSum => prevstepsSum + 1)
        props.onActionComplete();
    };

    const divideByTwo = () =>{
        setCounter(prevCount => prevCount / 2)
        setStepsSum(prevstepsSum => prevstepsSum + 1)
        props.onActionComplete();
    };

    return (
        <div className={props.isCurrentPlayer ? styles.playerCart : styles.playerCartDisable }>
            <h2>Gamer: {props.objectPlayer.name}</h2>
            <h3>counter: {counter}</h3>
            <h4>steps: {stepsSum}</h4>
            <Options    onPlusOne={addOne}
                        onMinusOne={minusOne}
                        onMult={multByTwo}
                        onDivide={divideByTwo}
                        disabled={!props.isCurrentPlayer} // Désactiver les boutons si ce n'est pas le tour du joueur
            />
            <h4>scores: [{props.objectPlayer.scores.join(', ')}]</h4>
        </div>
    );
}

export default Player;