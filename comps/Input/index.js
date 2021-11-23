import React from 'react';
import styles from 'styles/Input.module.css';

export const Input = ({ placeholder, name }) => {
    return (
        <input
            type="text"
            className={styles.inputElem}
            placeholder={placeholder}
            name={name}
        />
    );
};