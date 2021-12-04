import React from 'react';

import styles from 'styles/Button.module.css';

export const Button = ({ text, type, handleEvent }) => (
    <button
        type={type === 'button' ? 'button' : 'submit'}
        className={styles.btn}
        onClick={handleEvent}
    >
        {text}
    </button>
);
