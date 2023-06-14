import React from 'react';
import styles from './darkMoodToggle.module.css';

const DarkMoodToggle = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🌞</div>
            <div className={styles.ball}></div>
        </div>
    );
};

export default DarkMoodToggle;