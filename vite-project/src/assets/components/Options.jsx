import { useState } from 'react'
import styles from './Options.module.css'
function Options({onPlusOne, onMinusOne, onMult, onDivide}){

    return (
        <div className={styles.options}>
            <button className={styles.optionsBtn} onClick={onPlusOne}>+1</button>
            <button className={styles.optionsBtn} onClick={onMinusOne}>-1</button>
            <button className={styles.optionsBtn} onClick={onMult}>*2</button>
            <button className={styles.optionsBtn} onClick={onDivide}>/2</button>

        </div>
    );
}

export default Options;