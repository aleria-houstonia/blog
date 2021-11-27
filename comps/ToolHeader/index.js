import React from 'react';
import { EditLogo } from 'Components/EditLogo';
import { Logo } from 'Components/Logo';
import styles from 'styles/ToolHeader.module.css';
import Link from 'next/link';

export const ToolHeader = () => {
    return (
        <div className={styles.main}>
            
            <Link href="/login">
            
                <img
                    className={styles.imgTool}
                    src="http://s1.iconbird.com/ico/2013/9/450/w256h2561380453931User256x25632.png"
                />
            </Link>
            <Logo />
            <EditLogo />
        </div>
    );
};
