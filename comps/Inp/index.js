import React from 'react';

import styles from 'styles/Comps/Input.module.css';

export function MyInp({ placeholder, name, handleEvent }) {
    return (
        <input
            type="text"
            className={styles.inputElem}
            placeholder={placeholder}
            name={name}
            onChange={handleEvent}
        />
    );
}
