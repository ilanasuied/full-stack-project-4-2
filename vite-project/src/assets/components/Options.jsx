import { useState } from 'react'
import styles from './Options.module.css'
function Options({onPlusOne, onMinusOne, onMult, onDivide, disabled}){

    return (
        <div className={styles.options}>
            <button className={styles.optionsBtn} onClick={onPlusOne} disabled={disabled}>+1</button>
            <button className={styles.optionsBtn} onClick={onMinusOne} disabled={disabled}>-1</button>
            <button className={styles.optionsBtn} onClick={onMult} disabled={disabled}>*2</button>
            <button className={styles.optionsBtn} onClick={onDivide} disabled={disabled}>/2</button>

        </div>
    );
}

export default Options;