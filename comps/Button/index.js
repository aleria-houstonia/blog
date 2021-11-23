import React from 'react';
import styles from 'styles/Button.module.css';

export const Button = ({ text, type }) => {
    return (
        <button type={type} className={styles.btn}>
            {text}
        </button>
    );
};
