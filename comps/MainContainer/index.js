import React from 'react';
import styles from 'styles/MainContainer.module.scss';

export const MainContainer = ({ children }) => {
    return (
        <div className={styles.main}>
            <div>{children}</div>
        </div>
    );
};
