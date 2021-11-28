import React from 'react';

import styles from 'styles/Button.module.css';

export const Button = ({ text, type }) => (
    <button type={type === 'button' ? 'button' : 'submit'} className={styles.btn}>
        {text}
    </button>
);
