import React from 'react';
import { useRouter } from 'next/router';

import { AddLogo } from 'Components/Icon/AddLogo';
import { Logo } from 'Components/Icon/Logo';
import styles from 'styles/ToolHeader.module.css';
import { checkToken } from 'lib';

export const ToolHeader = () => {
    const router = useRouter();
    return (
        <div className={styles.main}>
            <div onClick={() => router.push('/login')}>
                <img
                    className={styles.imgTool}
                    src="http://s1.iconbird.com/ico/2013/9/450/w256h2561380453931User256x25632.png"
                />
            </div>
            <Logo />
            {checkToken() ? (
                <div onClick={() => router.push('/add')}>
                    <AddLogo />
                </div>
            ) : (
                <>
                    <div style={{ width: '45px' }}>
                        <div />
                    </div>
                </>
            )}
        </div>
    );
};
