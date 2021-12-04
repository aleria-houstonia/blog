import React from 'react';
import Link from 'next/link';

import { AddLogo } from 'Components/Icon/AddLogo';
import { Logo } from 'Components/Icon/Logo';
import styles from 'styles/ToolHeader.module.css';

export const ToolHeader = () => {
    const clickHandle = () => {
        document.location.href = '/add';
    };
    function checkToken() {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('mytoken');
            const res = token !== null;
            return res;
        }
        return false;
    }

    return (
        <div className={styles.main}>
            <Link href="/login">
                <img
                    className={styles.imgTool}
                    src="http://s1.iconbird.com/ico/2013/9/450/w256h2561380453931User256x25632.png"
                />
            </Link>
            <Logo />
            {checkToken() ? (
                <div onClick={clickHandle}>
                    <AddLogo />
                </div>
            ) : (
                <div />
            )}
        </div>
    );
};
